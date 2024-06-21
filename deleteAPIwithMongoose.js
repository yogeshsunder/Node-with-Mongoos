const mongoose = require('mongoose');
require('./config');
const Product = require('./products');
const express = require('express');

const app = express();
app.use(express.json());

app.delete('/delete/:_id', async (req, resp)=>{
    //let data = await Product.deleteOne({name: 'NikeA2'});
    let data = await Product.deleteOne(req.params);
    //let result = await data.send(data);
    resp.send(data);
})

app.listen(6900);