const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');
dotenv.config({path : './config.env'});

mongoose.connect(process.env.DB)
.then(err=>{
    console.log('Successfully Connected to Database');
})

app.listen(process.env.PORT,()=>{
    console.log('server is live');
})