const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    dni: {
        type: Number,
        unique: true,
        required: true
    },
    name: String,
    last_name: String,
    phone: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String, 
        required: true
    },

});

const User = mongoose.model('users',userSchema);

module.exports = User;