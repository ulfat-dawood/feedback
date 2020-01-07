var express = require('express');
var Feedback = require("../models/Feedback");
var router = express.Router();
var nodemailer= require('nodemailer');
var config = require('config');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('feedback');
});

router.post('/', async (req, res)=>{
	try{
		let feedback = new Feedback(req.body)
		feed = await feedback.save();
		res.send(`Feedback for ${feed.productName} submitted`);

		let transporter = nodemailer.createTransport({
			host: config.get('HOST'),
			port: config.get('PORT'),
			secure: true, // true for 465, false for other ports
			auth: {
			  user: config.get('USERNAME'),
			  pass: config.get('PASSWORD')
			}
		  });

		  let info = await transporter.sendMail({
			from: '"Ulfat Dawood" <admin@iulfat.com>', // sender address
			to: `${feedback.email}`, // list of receivers
			subject: "Feedback Submitted", // Subject line
			text: "Thanks", // plain text body
			html: "<b>Done</b>" // html body
		  });
		

	}catch(err){
		console.log(err)
	}
})



module.exports = router;
