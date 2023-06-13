const express = require('express')
const conectarDB = require('./config/db');
const cors = require('cors')

const app = express()

conectarDB();
app.use(cors())
app.use(express.json())
app.use('/api', require('./routes/routes'))

app.listen(4001, () => {
    console.log(`Aplicación ejecutándose en el puerto 4001`)
})
