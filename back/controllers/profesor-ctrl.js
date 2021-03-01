const Profesor = require('../models/profesores-model')

createProfesor = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Debes ingresar información de un profesor',
        })
    }

    const profesor = new Profesor(body)

    if (!profesor) {
        return res.status(400).json({ success: false, error: err })
    }

    profesor
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: profesor._id,
                message: 'Profesor agregado',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Profesor no agregado',
            })
        })
}

updateProfesor = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Profesor.findOne({ _id: req.params.id }, (err, profesor) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Profesor no encontrado',
            })
        }
        profesor.nombre = body.nombre
        profesor.titulo = body.titulo
        profesor.areas = body.areas
        profesor.horaConsulta = body.horaConsulta
        profesor.cursos = body.cursos
        profesor
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: profesor._id,
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

deleteProfesor = async (req, res) => {
    await Profesor.findOneAndDelete({ _id: req.params.id }, (err, profesor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!profesor) {
            return res
                .status(404)
                .json({ success: false, error: `Profesor no encontrado` })
        }

        return res.status(200).json({ success: true, data: profesor })
    }).catch(err => console.log(err))
}

getProfesorById = async (req, res) => {
    await Profesor.findOne({ _id: req.params.id }, (err, profesor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!profesor) {
            return res
                .status(404)
                .json({ success: false, error: `Profesor no encontrado` })
        }
        return res.status(200).json({ success: true, data: profesor })
    }).catch(err => console.log(err))
}

getProfesores = async (req, res) => {
    await Profesor.find({}, (err, profesores) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!profesores.length) {
            return res
                .status(404)
                .json({ success: false, error: `Profesor no enccontrado` })
        }
        return res.status(200).json({ success: true, data: profesores })
    }).catch(err => console.log(err))
}

validateProfesor = async (req, res) => {
    const _email = req.body.email
    const _password = req.body.password;
    await Profesor.findOne({email: _email}, (err, profesor) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (_password!=profesor.password) {
            return res
                .status(404)
                .json({ success: false, error: `Contraseña inválida` })
        }
        return res.status(200).json({ success: true, data: profesor })
    }).catch(err => console.log(err))
}

module.exports = {
    createProfesor,
    updateProfesor,
    deleteProfesor,
    getProfesores,
    getProfesorById,
    validateProfesor
}