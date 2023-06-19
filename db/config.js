const dotenv = require("dotenv").config();

const mongoose = require("mongoose");

const DB = process.env.DB
mongoose.set('strictQuery', false);
mongoose.connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected Successfully")).catch((errr)=>{
    console.log(errr);
})