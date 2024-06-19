const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    Brand: String
});
module.exports = mongoose.model('products', ProductSchema);