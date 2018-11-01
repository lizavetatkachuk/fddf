var express = require('express');
var router = express.Router();
var checkToken=require('/index');
/* GET home page. */
router.get('/general/:id', checkToken,function(req, res, next) {
    jwt.verify(req.token, 'chilipepper', (err) => {
        if (err) {
            //If error send Forbidden (403)
            res.render('index');
            res.sendStatus(403);
        } else {
            //If token is successfully verified, we can send the autorized data
            res.render('currency');
        }
    });
});

module.exports = router;