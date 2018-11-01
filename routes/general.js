var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/general',function(req,res,next)  {
    res.render('general');
})

module.exports = router;