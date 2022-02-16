const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/x-store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connected To Database"))
.catch((error)=> console.error('Error: ' + error ));
