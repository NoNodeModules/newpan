const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mesajSchema = new Schema({
    user1:String,
    user2:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Mesaj",mesajSchema)