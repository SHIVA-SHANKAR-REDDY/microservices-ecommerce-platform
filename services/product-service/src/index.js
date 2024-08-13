
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo/product-db', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/products', productRoutes);

app.listen(3001, () => {
    console.log('Product service running on port 3001');
});
