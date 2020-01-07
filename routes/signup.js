var express = require('express');
var router = express.Router();
var bcrypt= require('bcrypt'); 
const saltRounds = 10;
var Users= require('../models/User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('signup');
});

router.post("/", (req,res)=>{
  let user = req.body;
  bcrypt.hash(user.password, saltRounds, function(err, hash) {
    if (err) console.log(err)
    user.password = hash;
      let usr = new Users(user);
      usr.save((err)=>{
        if(err) res.send(err);
        else res.redirect('/signin');
    });
  });
});

module.exports = router;