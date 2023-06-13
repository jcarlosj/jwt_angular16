const express = require('express')
const router = express.Router()
const mdlJWT = require('../middlewares/jwt')
const usuarioController = require('../controllers/usuario.controller')
const sessionController = require('../controllers/session.controller')


router.post('/ingreso', sessionController.generateToken)

router.get('/usuarios', mdlJWT.verificarToken, usuarioController.obtenerUsuarios)
router.get('/usuario/:id', mdlJWT.verificarToken, usuarioController.obtenerUsuario)
router.post('/usuario', usuarioController.crearUsuario)
router.put('/usuario/:id', mdlJWT.verificarToken, usuarioController.actualizarUsuario)
router.delete('/usuario/:id', mdlJWT.verificarToken, usuarioController.borrarUsuario)

module.exports = router
