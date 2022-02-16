const User = require("../model/user");

const addUser = async (userInpot) =>{
    const user = new User(userInpot);
    await user.save()
    return user;
}

module.exports = {addUser}