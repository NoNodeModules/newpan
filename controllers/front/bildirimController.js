const async = require("async")
const Bildirim = require("../../models/bildirim")
const Yorum = require("../../models/yorum")

exports.insert = async(req,res,next)=>{
    let yorum = await Yorum.findById({"_id":req.body.user})
    new Bildirim({
        type:0,
        yorum:yorum,
        user:req.user,
        own:yorum.user
    }).save((err,data)=>{
        if (err) {
            console.lof(err)
        } else {
            console.log("Başarılı")
        }
    })
}