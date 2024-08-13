
const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send({ message: 'Error retrieving products', error });
    }
};

exports.addProduct = async (req, res) => {
    const { name, price, stock } = req.body;
    
    try {
        const newProduct = await Product.create({ name, price, stock });
        res.status(201).send(newProduct);
    } catch (error) {
        res.status(500).send({ message: 'Error adding product', error });
    }
};
