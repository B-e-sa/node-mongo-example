const User = require('../models/User')

const redirect = async (req, res) => {
    let name = req.params.name

    try {

        // Procura pelo usuário no User collection
        let doc = await User.findOne({ name })

        res.redirect(doc.gitUrl)

    } catch (err) {

        res.send(err)

    }
}

module.exports = { redirect }