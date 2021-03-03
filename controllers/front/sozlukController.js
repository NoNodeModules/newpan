const async = require("async")
const Sozluk = require("../../models/sozluk")
const Etiket = require("../../models/etiket")
const User = require("../../models/user")
const Yorum = require("../../models/yorum")
const moment = require("moment")
const cloudinary = require("cloudinary")
cloudinary.config({
    cloud_name: "panipal",
    api_key: "696114387999363",
    api_secret: "rL5AcC0ga8MtLBlIHmoy2oi7Gqs"
});
moment.locale("tr")


exports.list = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ createdAt: -1 })
    let etiket = await Etiket.find({})
    res.render("front/sozluk/sozluk", {
        sozluk: sozluk,
        etiket: etiket,
        moment: moment,
        user: req.user
    })
}

exports.tag = async (req, res, next) => {
    let sozluk = await Sozluk.find({ "tag": req.params.tag })
    let etiket = await Etiket.find({})
    res.render("front/etiket", {
        sozluk: sozluk,
        etiket: etiket,
        moment: moment,
        konu: req.params.tag,
        user: req.user
    })
}

exports.single = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 })
    let etiket = await Etiket.find({})
    let konu = await Sozluk.findById({ "_id": req.params.id })
    let yorum = await Yorum.find({ "konu._id": konu._id }).sort({ "createdAt": -1 })
    res.render("front/sozluk/single", {
        sozluk: sozluk,
        yorum: yorum,
        moment: moment,
        etiket: etiket,
        konu: konu,
        user: req.user
    })
}


exports.ekle = async (req, res, next) => {
    let sozluk = await Sozluk.findById({ "_id": req.body.sid })
    new Yorum({
        user: req.user,
        yorum: req.body.yorum,
        konu: sozluk
    }).save((err, data) => {
        if (err) {
            res.json({ status: false })
        } else {
            res.json({ status: true })
        }
    })
}

exports.insert = async (req, res, next) => {
    new Sozluk({
        title: req.body.title,
        tag: req.body.tag,
        user: req.user
    }).save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ status: true })
        }
    })
}