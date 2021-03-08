const async = require("async")
const Sozluk = require("../../models/sozluk")
const Yorum = require("../../models/yorum")
const Etiket = require("../../models/etiket")
const User = require("../../models/user")
const Begen = require("../../models/begen")
const moment = require("moment")
const cloudinary = require("cloudinary")
cloudinary.config({
    cloud_name: "panipal",
    api_key: "696114387999363",
    api_secret: "rL5AcC0ga8MtLBlIHmoy2oi7Gqs"
});
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


exports.profil = async (req, res, next) => {
    let sozluk = await Sozluk.find({}).sort({ "createdAt": -1 }).limit(3)
    let yorum = await Yorum.find({ "user._id": req.user._id })
    let begen = await Begen.find({ "user._id": req.user._id })
    res.render("front/auth/profil", {
        user: req.user,
        sozluk: sozluk,
        yorum: yorum,
        begen: begen,
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

exports.pro = async (req, res, next) => {
    res.render("front/set/pro", {
        user: req.user
    })
}

exports.hes = async (req, res, next) => {
    res.render("front/set/hes", {
        user: req.user
    })
}

exports.magaza = async (req, res, next) => {
    let etiket = await Etiket.find({})
    res.render("front/magaza/magaza", {
        user: req.user,
        etiket: etiket
    })
}

exports.magazaic = async (req, res, next) => {
    res.render("front/magaza/magazaic", {
        user: req.user
    })
}

exports.mesaj = async (req, res, next) => {
    res.render("front/mesaj", {
        user: req.user
    })
}

exports.mesajic = async (req, res, next) => {
    res.render("front/mesajicc", {
        user: req.user
    })
}

exports.mesajicc = async (req, res, next) => {
    res.render("front/mesajic", {
        user: req.user
    })
}

exports.duzenle = async (req, res, next) => {
    res.render("front/duzenle", {
        user: req.user
    })
}

exports.eris = async (req, res, next) => {
    res.render("front/set/eris", {
        user: req.user
    })
}

exports.ista = async (req, res, next) => {
    res.render("front/set/ista", {
        user: req.user
    })
}

exports.cloudupload = async (req, res, next) => {
    cloudinary.uploader.upload(req.body.resim,
        function (data, err) {
            console.log(data)
            res.json({
                status: true,
                resim: data
            })
        });

}

exports.reklam = async(req,res,next)=>{
    res.render("front/reklam",{
        user:req.user
    })
}