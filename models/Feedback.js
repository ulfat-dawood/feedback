const Schema = require("mongoose").Schema;

const UserSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    productName : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    suggestions : {
        type : String
    }
})

const FeedbackModel = require("mongoose").model('Feedback', UserSchema, 'feedback');

module.exports = FeedbackModel;