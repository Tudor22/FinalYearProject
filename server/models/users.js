const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    quote: {type: String, default: "You have no quote"}
})


UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(11));
};

UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model('User', UserSchema)

module.exports = User