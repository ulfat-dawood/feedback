var express = require('express');
var User = require("../models/User")
var bcrypt = require('bcrypt')
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//const saltRounds = 10;

// router.post('/', async (req, res)=>{
// 	try{
// 		var hashed = await bcrypt.hash(req.body.password, saltRounds);
// 		let user = new User({email: req.body.email, password: hashed});
// 		usr = await user.save();
// 		res.send(`${usr.email} created`);

// 	}catch(err){
// 		console.log(err)
// 	}
// })

router.post('/', async (req, res)=>{
	const user = new User(req.body)
	try{
		let usr = await User.findOne({email:req.body.email});
		let bool = await bcrypt.compare(req.body.password, usr.password);
		if (bool) {
			res.redirect('/feedback');
		}
		else res.send('You did not write wisely');
	}catch(err){
		console.log(err)
	}
})

module.exports = router;
