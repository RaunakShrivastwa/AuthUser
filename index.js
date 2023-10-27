const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');
const parser = require('body-parser');
const passport = require('passport')
const session = require('express-session');
const MongoStore = require('connect-mongo')
const passportJwt= require('./config/passport-jwt')
const passportLocal= require('./config/passport-local')

dotenv.config();
const PORT = process.env.PORT
const app = express();
app.use(parser.json())

app.use(session({
    name:'Shubham',
    secret:'shubhamCodial',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge: (40*40*40)
    }
}));
app.use(passport.initialize());
app.use(passport.session())

app.use('/', require('./router/HomeRouter'))








app.listen(PORT, (err) => {
    if (err) {
        console.log("There is Problem with Server", err);
        return;
    }
    console.log("Server Started at ", PORT);
})