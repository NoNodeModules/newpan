const express = require('express');
const router = express.Router();
const mainController = require("../controllers/front/mainController")
const sozlukController = require("../controllers/front/sozlukController")
const userController = require("../controllers/front/userController")
const medyaController = require("../controllers/front/medyaController")

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
//SÖZLÜK
router.get('/single/:id', sozlukController.single)
router.get("/sozluk", sozlukController.list)
router.get("/sozluk/:tag", sozlukController.tag)
router.post("/sozluk/yorumekle", sozlukController.ekle)
router.post("/sozluk/konuekle", sozlukController.insert)
//MEDYA
router.get("/medya", medyaController.list)
router.get("/medyaic", medyaController.msingle)

router.get("/profil", mainController.profil)
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
router.get("/eris",mainController.eris)
router.get("/ista",mainController.ista)

router.post("/begen",sozlukController.begen)

//USER UPDATE 
router.post("/probio",userController.probio)
router.post("/bioyaz",userController.bioyaz)
router.post("/cloudupload",mainController.cloudupload)

//KİŞİLER
router.get("/profil/:id",userController.kisi)


module.exports = router;