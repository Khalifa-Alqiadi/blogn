const mongoose = require("mongoose");
const Joi = require("joi");
const { string } = require("joi");

const User = mongoose.model('User', new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        minlength:3,
        maxlength:44,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minlength:5,
        maxlength:200,
    },
    password:{
        type:String,
        required:true,
        minlength:8,
        maxlength:1000,
    },
    isAdmin: Boolean,
}))

function userValidete(user){
    const schema = {
        fullname: Joi.string().min(3).max(44).required(),
        email: Joi.string().min(5).max(200).required().email(),
        password: Joi.string().min(8).max(1000).required(),
    }
    return Joi.valid(user, schema);
}

exports.User = User;
exports.userValidete = userValidete;