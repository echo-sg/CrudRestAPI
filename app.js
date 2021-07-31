const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/PersonDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const personRouter = require('./routes/persons')
app.use('/persons',personRouter)

app.listen(9000, () => {
    console.log('Server started')
})