const mongoose = require('mongoose'); //importamos la dependencia de mongo
require('dotenv').config({ path: 'config.env' }); //importamos en archivo de config.env

//agregamos una funcion asincrona para conectar a la base de datos
const conectarDB = async() => {
    //realizamos un try catch para hacer las configuraciones respectivas para conectar a la BD
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false
        })
        console.log('BD Conectada');
    } catch (error) {
        console.log(error);
        process.exit(1) //detenemos la aplicacion
    }

}

//exportamos la funcion recien creada para que sea visible en otros archivos
module.exports = conectarDB
