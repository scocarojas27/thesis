const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Curso = new Schema(
    {
        id: { type: Number, required: true },
        nombre: { type: String, required: true },
        descripcion: {type: String, required: true},
        horarios: { type: String, required: true },
        contenidos: {type: [String], required: true},
        noticias: {type: [], required: true},
        profesor: {type: String, required: true},
    },
    { timestamps: true },
)

module.exports = mongoose.model('cursos', Curso)