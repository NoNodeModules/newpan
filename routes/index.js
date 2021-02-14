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

router.get('/', mainController.index);
router.get('/single/:id', mainController.single)

router.get("/sozluk", sozlukController.list)
router.get("/sozluk/:tag", sozlukController.tag)
router.post("/sozluk/yorumekle", sozlukController.ekle)
router.post("/sozluk/konuekle", sozlukController.insert)

router.get("/profil", mainController.profil)
router.get("/setting",mainController.ayar)

module.exports = router;