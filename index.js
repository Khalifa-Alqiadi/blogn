const express = require("express");
const session = require('express-session')
const bodyParser = require('body-parser');
const userRoutes = require("./routes/authRoutes")
require('./utils/dbconnact');
const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

// app.set('trust proxy', 1)
app.use(session({
  secret: '2435d1c526f4d75ba264e15f14a319729eb4785d',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use('/', userRoutes)

app.get('/', (req, res) =>{
    req.session.views = (req.session.views || 0) + 1
    console.log(`You are visited ${req.session.views} time`)
    return res.render('index');
});

app.listen(3000, () =>{
    console.log("Server running at port 3001")
})

module.exports = app;