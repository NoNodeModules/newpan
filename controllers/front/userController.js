const async = require("async")
const User = require("../../models/user") 
const Sozluk = require("../../models/sozluk")
const moment = require("moment")
moment.locale("tr")

exports.probio = async(req,res,next)=>{
    let user = await User.findById({"_id":req.user._id})
    user.update({
        photo:req.body.photo,
        bio:req.body.bio
    },(err,data)=>{
        if (err) {
            res.json({status:false})
        } else {
            res.json({status:true})
        }
    })
}

exports.kisi = async(req,res,next)=>{
    let kisi = await User.findById({"_id":req.params.id}) 
    let sozluk = await Sozluk.find({"user._id":kisi._id})
    res.render("front/auth/myprofile",{
        user:req.user,
        sozluk:sozluk,
        kisi:kisi,
        moment:moment
    })
}