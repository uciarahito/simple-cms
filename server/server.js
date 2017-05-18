const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const index = require('./routes/index')

app.use(cors)
// connect the `mongoose` instance
mongoose.connect('mongodb://localhost/hacktivpress-uci');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.use('/', index)

app.listen(3000)