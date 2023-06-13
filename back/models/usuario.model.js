const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombres: {
        type: String,
        require: true
    },
    apellidos: {
        type: String,
        require: true
    },
    edad: {
        type: Number,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    rol: {
        type: String,
        require: false,
        default: 'usuario'
    }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = mongoose.model('usuario', UsuarioSchema)
