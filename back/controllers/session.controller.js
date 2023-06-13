require('dotenv').config({ path: 'config.env' })
const jwt = require('jsonwebtoken');
const Usuario = require("../models/usuario.model")


// Aquí generas el token utilizando el payload y la clave secreta
exports.generateToken = async(req, res) => {

    const { correo, password } = req.body;
    //validación correo
    const usuario = await Usuario.findOne({ correo: correo })
    if (!usuario) return res.status(401).json({ msg: 'El correo no existe' })


    //validación contraseña
    if (usuario.password !== password) return res.status(401).json({ msg: 'Contraseña invalida' })

    const payload = {
        id: usuario._id
    }

    const token = jwt.sign(payload, process.env.SECRET_KEY_JWT, { expiresIn: '1h' });
    return res.status(202).json({ token: token })

}
