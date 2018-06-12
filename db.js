const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/contactdb',(err)=>{
    if(!err) console.log("Connected to monodb");
    else console.log("error connecting to mogodb");
});

module.exports = mongoose;


//callback function after previous work is done (err)=>//

