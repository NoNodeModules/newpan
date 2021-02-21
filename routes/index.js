const express = require('express');
const router = express.Router();
const mainController = require("../controllers/front/mainController")
const sozlukController = require("../controllers/front/sozlukController")

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
router.get("/myprofil", mainController.myprofil)
router.get("/guncelle", mainController.guncelle)
router.get("/setting",mainController.ayar)
router.get("/hesap",mainController.hesap)
router.get("/baglanti",mainController.baglanti)
router.get("/guvenlik",mainController.guvenlik)

module.exports = router;