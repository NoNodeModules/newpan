const mongoose = require("mongoose")
const Schema = mongoose.Schema

const sozlukSchema = new Schema({
    title:String,
    tag:String,
    comment:Array,
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Sozluk",sozlukSchema)