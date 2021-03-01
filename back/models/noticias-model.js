const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Noticia = new Schema(
    {
        titulo: { type: String, required: true },
        descripcion: {type: String, required: true},
        imagen: {},
    },
    { timestamps: true },
)

module.exports = mongoose.model('noticias', Noticia)