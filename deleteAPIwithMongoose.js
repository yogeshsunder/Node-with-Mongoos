const mongoose = require('mongoose');
require('./config');
const Product = require('./products');
const express = require('express');

const app = express();
app.use(express.json());

app.get('/delete', async (req, resp)=>{
    let data = await Product.deleteOne({name: 'NikeA2'});
    //let result = await data.send(data);
    console.log(data);
    resp.send("Yogi maharaj ki jai");
})

app.listen(6900);