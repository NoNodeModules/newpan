const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
    username: String,
    password: String,
    name: String,
    surname: String,
    type: {
        type: Number,
        default: 2
    }, // 0 Admin 1 Yazar 2 Üye
    item: Object,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', User);