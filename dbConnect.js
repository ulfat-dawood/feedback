const mongoose = require('mongoose');
const uri = require('config').get('MONGOURI');

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (err) console.log("Help!!!!!!!!");
    else console.log('MongoDB Connected');
});