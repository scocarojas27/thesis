const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const ProfesorRouter = require('./routes/profesor-router')
const CursoRouter = require('./routes/cursos-router')
const NoticiaRouter = require('./routes/noticia-router')

const app = express()
const apiPort = 3000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', ProfesorRouter)
app.use('/api', CursoRouter)
app.use('/api', NoticiaRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))