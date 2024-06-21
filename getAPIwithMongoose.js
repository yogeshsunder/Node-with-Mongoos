const mongoose = require('mongoose');
require('./config');
const Product = require('./products');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/', async (req, resp)=>{
    let data = await Product.find({name: 'NikeA2'});
    resp.send(data);
    console.log(data);
    resp.send("Yogi maharaj ki jai");
})

app.listen(6800);