const express = require('express')
const router = express.Router()

const userController = require('../controllers/userControllers')

/* 
* Função assíncrona que tenta retornar a busca pelo
* usuário e depois redirecionar para o perfil
*/
router.get('/:name', userController.redirect)

module.exports = router