const express = require('express');
const router = express.Router();
const mainController = require("../controllers/front/mainController")
const sozlukController = require("../controllers/front/sozlukController")
const userController = require("../controllers/front/userController")

function checkAuthentication(req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.redirect("/users/login");
    }
}

router.get("/flex",(req,res,next)=>{
    res.render("flex")
})

router.get("/loader",function(req,res,next) {
    res.render("front/loader")
})

router.get('/', mainController.index);
router.get('/single/:id', mainController.single)

router.get("/sozluk", sozlukController.list)
router.get("/sozluk/:tag", sozlukController.tag)
router.post("/sozluk/yorumekle", sozlukController.ekle)
router.post("/sozluk/konuekle", sozlukController.insert)

router.get("/profil", mainController.profil)
router.get("/magaza", mainController.magaza)
router.get("/magazaic", mainController.magazaic)
router.get("/bildirim", mainController.bildirim)
router.get("/myprofil", mainController.myprofil)
router.get("/guncelle", mainController.guncelle)
router.get("/setting",mainController.ayar)
router.get("/hesap",mainController.hesap)
router.get("/baglanti",mainController.baglanti)
router.get("/guvenlik",mainController.guvenlik)
router.get("/mesaj",mainController.mesaj)
router.get("/mesajic",mainController.mesajic)
router.get("/mmm",mainController.mesajicc)
router.get("/duzenle",mainController.duzenle)
router.get("/pro",mainController.pro)
router.get("/hes",mainController.hes)

//USER UPDATE 
router.post("/probio",userController.probio)
router.post("/cloudupload",mainController.cloudupload)



module.exports = router;