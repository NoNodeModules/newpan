const async = require("async")
const Sozluk = require("../../models/sozluk")
const Etiket = require("../../models/etiket")
const User = require("../../models/user")
const moment = require("moment")
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
        konu : req.params.tag,
        user: req.user
    })
}

exports.single = async (req, res, next) => {
    let sozluk = await Sozluk.findById({ "_id": req.params.id })
    res.render("front/sozluk/single", {
        sozluk: sozluk,
        yorum: sozluk.comment.sortBy(function(o){ return new Date( o.date ) }),
        moment: moment,
        user: req.user
    })
}

exports.ekle = async (req, res, next) => {
    let sozluk = await Sozluk.findById({ "_id": req.body.sid })
    sozluk.update({
        $push: {
            comment: {
                user: req.user,
                yorum: req.body.yorum,
                createdAt: moment().format("DD-MM-YYYY HH:mm:ss")
            }
        }
    }, (err, data) => {
        if (err) {
            res.json({ status: false })
        } else {
            res.json({ status: true })
        }
    })
}

exports.insert = async (req, res, next) => {
    new Sozluk(req.body).save((err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json({ status: true })
        }
    })
}