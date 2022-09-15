const mongoose = require('mongoose')

/*
* Cria um novo schema, que é um modelo de como 
* serão as informações do objeto inserido no banco
*/
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gitUrl: String
})

/*
* Cria uma nova constante, que vai usar o modelo 
* definido pelo scheema. A variável também é como
* uma representação do banco, onde os comandos 
* do mongo serão utilizados, como por exemplo,
* User.find()
*/
module.exports = mongoose.model("User", userSchema)
