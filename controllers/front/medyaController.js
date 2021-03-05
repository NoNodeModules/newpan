const async = require("async")
const Medya = require("../../models/medya")
const Etiket = require("../../models/etiket")

exports.list = async (req, res, next) => {
    let medya = await Medya.find({})
    let etiket = await Etiket.find({})
    res.render("front/medya/medya", {
        user: req.user,
        etiket,
        medya
    })
}

exports.msingle = async (req, res, next) => {
    let medya = await Medya.findById({"_id":req.params.id})
    res.render("front/medya/medyaic", {
        user: req.user,
        medya
    })
}

exports.medyaekle = async (req, res, next) => {
    new Medya({
        user:req.user,
        title:req.body.title,
        aciklama:req.body.aciklama,
        kapak:req.body.kapak
    }).save((err,data)=>{
        if (err) {
            res.json({status:false})
        } else {
            res.json({status:true})
        }
    })
}