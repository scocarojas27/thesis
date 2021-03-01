const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Profesor = new Schema(
    {
        nombre: { type: String, required: true },
        titulo: { type: String, required: true },
        areas: {type: [String], required: true},
        horaConsulta: { type: [String], required: true },
        cursos: {type: [Number], required: true},
        email: {type: String, required: true},
        password: {type: String, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('profesores', Profesor)