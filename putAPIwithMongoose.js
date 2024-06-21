const mongoose = require('mongoose');
require('./config');
const Product = require('./products');
const express = require('express');

const app = express();
app.use(express.json());

// app.put('/put', async (req, resp)=>{
//     let data = await Product.updateOne(
//         {name: 'NikeA1'},
//     {
//         $set: {name: 'NikeA2'}
//     });
//     resp.send(data);
//     console.log(data);
//     resp.send("Yogi maharaj ki jai");
// })

// app.put("/put", async (req, resp) => {
//     let data = await Product.updateOne({name: "NikeA"}, {$set: req.body})
//     resp.send(data);

// })

app.put("/put/:_id", async (req, resp) => {
    let data = await Product.updateOne(req.params, {$set: req.body})
    resp.send(data);

})

app.listen(7000);