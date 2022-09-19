// dotenv for user, password & port
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

const port = process.env.PORT
const app = express()

const path = require('path')

const userRoute = require('./routes/userRoute')

// Criando um usuário exemplo com o .create({})
/*
User.create({
    name: "besa",
    age: 18,
    gitUrl: 'https://github.com/B-e-sa'
})
*/

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@teste0.rqeduqq.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri)

const db = mongoose.connection

db.on('error', () => {
    console.log('An error has ocurred')
})

db.once('open', () => {
    console.log('Database loaded')

    app.use('/', userRoute)
})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.listen(port, console.log(`App listening on port ${port}`))

