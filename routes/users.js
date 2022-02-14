const express = require("express");
const router = express.Router();
const {User, userValidete} = require("../model/user");
const mongoose = require("mongoose");
const _ = require("lodash");

router.post('/', async(req, res) =>{
    const{error} = userValidete(req.body)
    if(!error){
        return res.status(404).send(error.details[0].message);
    }
    // let user = await User.findOne({email: req.body.email});
    // if(user){
    //     return res.status(404).send('user found in database');
    // }
    let admin = await User.findOne({isAdmin: req.body.isAdmin});
    if(!admin){
        return res.status(404).send('You Are not Admin');
    }
    user = new User(_.pick(req.body, ['fullname','email', 'password']))
    await user.save();
    res.send(_.pick(user, ['_id', 'fullname', 'email']));
});

module.exports = router;