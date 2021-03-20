const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bildirimSchema = new Schema({
    title:String,
    url:String,
    user:Object, //* genel _id özel
    desc:String,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Bildirim",bildirimSchema)