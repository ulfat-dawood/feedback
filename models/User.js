const Schema = require("mongoose").Schema;

const UserSchema = new Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const UserModel = require("mongoose").model('UserModel', UserSchema, 'Users');

module.exports = UserModel;