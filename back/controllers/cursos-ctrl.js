const Curso = require('../models/cursos-models')

createCurso = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes ingresar información de un curso',
        })
    }

    const curso = new Curso(body)

    if (!curso) {
        return res.status(400).json({ success: false, error: err })
    }

    curso
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: curso._id,
                message: 'Curso agregado',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Curso no agregado',
            })
        })
}

updateCurso = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Curso.findOne({ id: req.params.id }, (err, curso) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Curso no encontrado',
            })
        }
        curso.nombre = body.nombre
        curso.descripcion = body.descripcion
        curso.horarios = body.horarios
        curso.contenidos = body.contenidos
        curso.noticias = body.noticias
        curso.profesor = body.profesor
        curso
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

deleteCurso = async (req, res) => {
    await Curso.findOneAndDelete({ _id: req.params.id }, (err, curso) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!curso) {
            return res
                .status(404)
                .json({ success: false, error: `Curso no encontrado` })
        }

        return res.status(200).json({ success: true, data: curso })
    }).catch(err => console.log(err))
}

getCursoById = async (req, res) => {
    await Curso.findOne({ id: req.params.id }, (err, curso) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!curso) {
            return res
                .status(404)
                .json({ success: false, error: `Curso no encontrado` })
        }
        return res.status(200).json({ success: true, data: curso })
    }).catch(err => console.log(err))
}

getCursos = async (req, res) => {
    await Curso.find({}, (err, cursos) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!cursos.length) {
            return res
                .status(404)
                .json({ success: false, error: `Curso no encontrado` })
        }
        return res.status(200).json({ success: true, data: cursos })
    }).catch(err => console.log(err))
}


module.exports = {
    createCurso,
    updateCurso,
    deleteCurso,
    getCursos,
    getCursoById
}