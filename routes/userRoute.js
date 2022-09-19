const express = require('express')
const router = express.Router()

const userController = require('../controllers/userControllers')

router.get('/users', userController.showAllUsers)

/* 
* Função assíncrona que tenta retornar a busca pelo
* usuário e depois redirecionar para o perfil
*/
router.get('/:name', userController.redirect)

// Rota padrão
router.get('/', (req, res) => {
    res.render('index', { error: false, body: {} })
})

// O url urlencoded permite pegar os dados do form do body
router.post('/', express.urlencoded({ extended: true }), userController.addUser)

router.delete('/:id', userController.deleteUser)

module.exports = router