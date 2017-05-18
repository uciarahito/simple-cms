const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const Strategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')
var index = require('./routes/index');
const userController = require('./controllers/userController')

app.use(cors())
mongoose.connect('mongodb://localhost/hactivpress-uci');

// NOTE: set
app.set('port', process.env.PORT || 3000)

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

passport.use(new Strategy(userController.signin));

app.use(passport.initialize());

app.use('/', index);

// NOTE: run
app.listen(app.get('port'), () => {
    console.log('Listening on port ' + app.get('port'));
})