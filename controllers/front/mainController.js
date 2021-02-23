const async = require("async")
const Sozluk = require("../../models/sozluk")
const Etiket = require("../../models/etiket")
const moment = require("moment")
moment.locale("tr")

exports.index = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 })
    let etiket = await Etiket.find({})
    res.render("front/index", {
        user: req.user,
        sozluk: sozluk,
        etiket: etiket,
        moment: moment
    })
}

exports.single = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 })
    let etiket = await Etiket.find({})
    let konu = await Sozluk.findById({ "_id": req.params.id })
    res.render("front/single", {
        sozluk: sozluk,
        moment: moment,
        etiket: etiket,
        konu: konu,
        user: req.user
    })
}

exports.profil = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 }).limit(3)
    res.render("front/profil", {
        user: req.user,
        sozluk: sozluk,
        moment: moment,
        user: req.user
    })
}

exports.myprofil = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 }).limit(3)
    res.render("front/myprofile", {
        user: req.user,
        sozluk: sozluk,
        moment: moment,
        user: req.user
    })
}

exports.guncelle = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 }).limit(3)
    res.render("front/guncelle", {
        user: req.user,
        sozluk: sozluk,
        moment: moment,
        user: req.user
    })
}

exports.ayar = async (req, res, next) => {
    res.render("front/set/setting", {
        user: req.user
    })
}

exports.hesap = async (req, res, next) => {
    res.render("front/set/hesap", {
        user: req.user
    })
}

exports.baglanti = async (req, res, next) => {
    res.render("front/set/baglanti", {
        user: req.user
    })
}

exports.guvenlik = async (req, res, next) => {
    res.render("front/set/guvenlik", {
        user: req.user
    })
}

exports.bildirim = async (req, res, next) => {
    res.render("front/bildirim", {
        user: req.user
    })
}

exports.magaza = async(req,res,next)=>{
    res.render("front/magaza",{
        user:req.user
    })
}

exports.magazaic = async(req,res,next)=>{
    res.render("front/magazaic",{
        user:req.user
    })
}

