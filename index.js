//System libraries

const express   = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');

//User libraries
const mongoose = require('./db');
const router = require('./routes/contact')
//create an express app
const app = express();

//use bodyparser and cors
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200'}));

//callback function 3000,function
app.use('/api',router);


app.listen(3000,()=>{
    console.log("Server started at port 3000...");
});

