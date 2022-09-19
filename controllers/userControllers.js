const User = require('../models/User')

const redirect = async (req, res) => {
    let name = req.params.name

    const user =
        await User.findOne({ name })
            .then(user => res.redirect(user.gitHub))
            .catch(error => res.send(error))
}

const addUser = async (req, res) => {
    const user = new User(req.body)

    const doc =
        await user.save()
            .then(doc => res.send('Usuário criado'))
            .catch(error => res.render('index', { error, body: req.body }))
}

const showAllUsers = async (req, res) => {
    const users =
        await User.find({})
            .then(users => { res.send(users) })
            .catch(error => res.send(error))
}

const deleteUser = async (req, res) => {
    const id = req.params.id

    const userId = 
        await User.findByIdAndDelete(id)
            .then(res.send(`Usuário de id ${id} deletado`))
            .catch(error => console.log(error))
}

module.exports = {
    redirect,
    addUser,
    showAllUsers,
    deleteUser
}