const express = require('express')

const CursoCtrl = require('../controllers/cursos-ctrl')

const router = express.Router()

router.post('/Curso', CursoCtrl.createCurso)
router.put('/Curso/:id', CursoCtrl.updateCurso)
router.delete('/Curso/:id', CursoCtrl.deleteCurso)
router.get('/Curso/:id', CursoCtrl.getCursoById)
router.get('/Cursos', CursoCtrl.getCursos)

module.exports = router