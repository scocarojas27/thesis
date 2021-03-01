const express = require('express')

const ProfesorCtrl = require('../controllers/profesor-ctrl')

const router = express.Router()

router.post('/Profesor', ProfesorCtrl.createProfesor)
router.put('/Profesor/:id', ProfesorCtrl.updateProfesor)
router.delete('/Profesor/:id', ProfesorCtrl.deleteProfesor)
router.get('/Profesor/:id', ProfesorCtrl.getProfesorById)
router.get('/Profesores', ProfesorCtrl.getProfesores)
router.put('/ProfesorLogin', ProfesorCtrl.validateProfesor)

module.exports = router