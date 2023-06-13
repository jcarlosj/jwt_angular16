const Usuario = require("../models/usuario.model")


exports.crearUsuario = async(req, res) => {
    try {
        let datUsuario = new Usuario(req.body)
        await datUsuario.save()
        res.send(datUsuario)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Paso algo a la hora de ejecutar esta instrucción, comuníquese con el administrador' })
    }
}



exports.obtenerUsuarios = async(req, res) => {
    try {
        let datUsuario = await Usuario.find()
        res.json(datUsuario)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Paso algo a la hora de ejecutar esta instrucción, comuníquese con el administrador' })
    }
}



exports.obtenerUsuario = async(req, res) => {
    try {
        let datUsuario = await Usuario.findById(req.params.id)
        if (!datUsuario) {
            res.status(404).json({ msg: 'No existe el usuario en la BD' });
        } else {
            res.json(datUsuario)
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Paso algo a la hora de ejecutar esta instrucción, comuníquese con el administrador' })
    }
}



exports.actualizarUsuario = async(req, res) => {
    try {

        const { nombres, apellidos, edad, correo, password, rol } = req.body
        let datUsuario = await Usuario.findById(req.params.id)
        if (!datUsuario) {
            res.status(404).json({ msg: 'No existe el usuario en la BD' });
        }

        datUsuario.nombres = nombres
        datUsuario.apellidos = apellidos
        datUsuario.edad = edad
        datUsuario.correo = correo
        datUsuario.password = password
        datUsuario.rol = rol

        datUsuario = await Usuario.findOneAndUpdate({ _id: req.params.id }, datUsuario, { new: true })
        res.json(datUsuario)

    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Paso algo a la hora de ejecutar esta instrucción, comuníquese con el administrador' })
    }
}



exports.borrarUsuario = async(req, res) => {
    try {
        let datUsuario = await Usuario.findById(req.params.id)
        if (!datUsuario) {
            res.status(404).json({ msg: 'No existe el usuario en la BD' });
        }
        await Usuario.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Usuario eliminado' })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Paso algo a la hora de ejecutar esta instrucción, comuníquese con el administrador' })
    }
}
