const mongoose = require('mongoose');

const saveInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-com");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        Brand: String
    });

    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = new ProductsModel({ name: "NikeA", price: "1080", Brand: "Nike" });
    let result = await data.save();
    console.log(result);
}

const updateInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-com");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        Brand: String
    });

    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.updateMany(
        { name: "NikeA"},
        { $set: { price: "1088", Brand: "Nike"} });
        console.log(data);
}

const deleteInDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/e-com");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        Brand: String
    });

    const ProductsModel = mongoose.model('products', ProductSchema);
    let data = await ProductsModel.deleteOne(
        { name: "NikeA"});
        console.log(data);
}

const findInDB = async ()=>{
    await mongoose.connect("mongodb://localhost:27017/e-com");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        Brand: String
    });

    const Product = mongoose.model('products', ProductSchema);
    let data = await Product.find({name: 'NikeA'});
    console.log(data);
}

findInDB();

//deleteInDB();

//updateInDB();

//saveInDB();
