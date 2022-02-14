const Joi = require("joi");
const express = require("express");
const app = express();
const users = require("./routes/users");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/admin', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connected To Database"))
.catch((error)=> console.error('Error: ' + error ));

app.use(express.json());
app.use('/api/users', users);

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/', (req, res)=>{
    res.send('fiteer alqiadi');
});

const port = process.env.port || 3001;
app.listen(port, ()=>console.log("App working on port " +port));
