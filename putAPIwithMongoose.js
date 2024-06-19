const mongoose = require('mongoose');
require('./config');
const Product = require('./products');
const express = require('express');

const app = express();
app.use(express.json());

app.put('/put', async (req, resp)=>{
    let data = await Product.updateOne(
        {name: 'NikeA1'},
    {
        $set: {name: 'NikeA2'}
    });
    console.log(data);
    resp.send("Yogi maharaj ki jai");
})

app.listen(7000);