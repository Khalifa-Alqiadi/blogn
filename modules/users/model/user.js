const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    fullname:{
        type: String,
        required:[true, 'Name is require'],
        minlength: [6, 'Name cant be sameller than 6'],
        maxlength: [30, 'Name is cant large 30'],
        index:true
    },
    email:{
        type: String,
        lowercase: true,
        required:[true, 'Email is require'],
        maxlength: [100, 'Email is cant large 100'],
        index:true
    },
    password:{
        type: String,
        required:[true, 'Password is require']
    },
    isActive:{
        type: Boolean,
        default:true
    },
    isDeleted:{
        type: Boolean,
        default:false
    },
}, {
    timestamp:true
})

const User = mongoose.model('users', userSchema);
module.exports = User;