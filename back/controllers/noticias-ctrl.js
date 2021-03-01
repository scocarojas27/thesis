const Noticia = require('../models/noticias-model')

createNoticia = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes ingresar información de una noticia',
        })
    }

    const noticia = new Noticia(body)

    if (!noticia) {
        return res.status(400).json({ success: false, error: err })
    }

    noticia
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: noticia._id,
                message: 'Noticia agregada',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Noticia no agregada',
            })
        })
}

updateNoticia = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Noticia.findOne({ _id: req.params.id }, (err, noticia) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Noticia no encontrada',
            })
        }
        noticia.titulo = body.titulo
        noticia.descripcion = body.descripcion
        noticia.imagen = body.imagen
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: curso._id,
                    message: 'Información actualizada',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Información no actualizada',
                })
            })
    })
}

deleteNoticia = async (req, res) => {
    await Noticia.findOneAndDelete({ _id: req.params.id }, (err, noticia) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!noticia) {
            return res
                .status(404)
                .json({ success: false, error: `Curso no encontrado` })
        }

        return res.status(200).json({ success: true, data: noticia })
    }).catch(err => console.log(err))
}

getNoticiaById = async (req, res) => {
    await Noticia.findOne({ _id: req.params.id }, (err, noticia) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!noticia) {
            return res
                .status(404)
                .json({ success: false, error: `Noticia no encontrada` })
        }
        return res.status(200).json({ success: true, data: noticia })
    }).catch(err => console.log(err))
}

getNoticias = async (req, res) => {
    await Noticia.find({}, (err, noticias) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!noticias.length) {
            return res
                .status(404)
                .json({ success: false, error: `Noticias no encontradas` })
        }
        return res.status(200).json({ success: true, data: noticias })
    }).catch(err => console.log(err))
}


module.exports = {
    createNoticia,
    updateNoticia,
    deleteNoticia,
    getNoticias,
    getNoticiaById
}