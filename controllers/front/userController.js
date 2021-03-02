const async = require("async")
const User = require("../../models/user")

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
    res.render("front/myprofile",{
        user:req.user,
        kisi:kisi
    })
}