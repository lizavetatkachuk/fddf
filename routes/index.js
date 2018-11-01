var express = require('express');
var router = express.Router();
var sequelize=require('/sequelize');
var User=require('/sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});
router.post('/',function(req,res,next)
{
    var pas=req.body.psw;
    var em=req.body.email;
    User.findOne({where:{email:em}}).
    then(user=>{
      if (!!user){bcrypt.compare(pas,user.password,function (err,res) {
        if(res)
        {
            jwt.sign({user}, 'chilipepper', { expiresIn: '1h' },(err, token) => {
                if(err) { console.log(err) }
                res.cookie('token',token);
            });
        }
        else res.render('index',{wrongP:"Wrong password"})
      }
      )}
      else res.render('index',{wrongE:"Wrong email"})

})
})
const checkToken = (req, res, next) => {

    const tok = req.cookies['token'];

    if(typeof tok !== 'undefined') {
      req.token=tok;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        res.sendStatus(403);
        res.send("GO AND LOG IN!")
    }
}
module.exports=checkToken();
module.exports = router;
