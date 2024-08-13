
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://mongo/auth-db', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);

app.listen(3000, () => {
    console.log('Auth service running on port 3000');
});
