const express = require('express');
const app = express();
require('./config');
const Product = require('./products');

app.get("/search/:key", async (req, resp) => {
    let data = await Product.find(
        {
            "$or": [
                {"name": {$regex:req.params.key}},
                {"Brand": {$regex:req.params.key}}
            ]
        }
    );

    resp.send(data);
})

app.listen(7100);