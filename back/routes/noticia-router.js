const express = require('express')

const NoticiaCtrl = require('../controllers/noticias-ctrl')

const router = express.Router()

router.post('/Noticia', NoticiaCtrl.createNoticia)
router.put('/Noticia/:id', NoticiaCtrl.updateNoticia)
router.delete('/Noticia/:id', NoticiaCtrl.deleteNoticia)
router.get('/Noticia/:id', NoticiaCtrl.getNoticiaById)
router.get('/Noticias', NoticiaCtrl.getNoticias)

module.exports = router