const async = require("async")
const Sozluk = require("../../models/sozluk")
const Etiket = require("../../models/etiket")
const moment = require("moment")
moment.locale("tr")

exports.index = async(req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 })
    let etiket = await Etiket.find({})
    res.render("front/index", {
        user: req.user,
        sozluk: sozluk,
        etiket: etiket,
        moment: moment
    })
}

exports.single = async(req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 })
    let etiket = await Etiket.find({})
    let konu = await Sozluk.findById({ "_id": req.params.id })
    res.render("front/single", {
        sozluk: sozluk,
        moment: moment,
        etiket: etiket,
        konu: konu
    })
}

exports.profil = async(req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 }).limit(3)
    res.render("front/profil", {
        user: req.user,
        sozluk: sozluk,
        moment: moment
    })
}

exports.ayar = async(req,res,next)=>{
    res.render("front/setting",{
        user:req.user
    })
}