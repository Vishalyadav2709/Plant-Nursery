const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/productroute')
const app = express();
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(cors());
app.use('/products', router); //LocalHost: 5000/books




mongoose.connect("mongodb+srv://Vishal2709:Saritayadav123@cluster0.2ijbi.mongodb.net/?retryWrites=true&w=majority").then(()=>console.log('Connected To DataBase')).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err));