var express = require('express');
var router = express.Router();
var sequelize=require('/sequelize');
var User=require('/sequelize');
const bcrypt = require('bcrypt');
/* GET register page. */
router.get('/register', function(req, res, next) {
    res.render('register');
});
router.post('/register',function(req,res,next)
{
    var pas=req.body.psw;
    var pasc=req.body.psw1;
    var em=req.body.email;
    if(pas!=pasc){res.render('/register',{wrong:"Wrong password confirmation"});}
    else {
        bcrypt.hash('myPassword', 10, function (err, hash) {
            User.create({email: em, password: hash});
        })
        res.render('general');
    }
});



module.exports = router;
