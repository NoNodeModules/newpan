const express = require('express');
const router = express.Router();
const mainController = require("../controllers/back/mainController")
const ayarController = require("../controllers/back/ayarController")
const sozlukController = require("../controllers/back/sozlukController")
const etiketController = require("../controllers/back/etiketController")

router.get("/", mainController.index)
router.get("/uyeler", mainController.uyeler)
router.get("/firmalar", mainController.firmalar)

router.get("/sozluk", sozlukController.list)
router.post("/sozluk", sozlukController.insert)
router.get("/sozluk/sil/:id", sozlukController.delete)

router.get("/etiket", etiketController.list)
router.post("/etiket", etiketController.insert)
router.get("/etiket/sil/:id", etiketController.delete)

router.get("/iletisim", mainController.iletisim)

router.get("/kategori", ayarController.list)
router.post("/kategori/ekle", ayarController.insert)
router.get("/kategori/:id", ayarController.delete)


module.exports = router;