mongoose = require("mongoose");
URI = require("config").get("URI")

mongoose.connect(URI, (err)=>{
    if (err) console.log("Not Working");
    else console.log("DB Connected")
})