
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 8);
    
    try {
        const newUser = await User.create({ email, password: hashedPassword });
        res.status(201).send({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).send({ message: 'Error registering user', error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send({ message: 'User not found' });

        const isValid = bcrypt.compareSync(password, user.password);
        if (!isValid) return res.status(401).send({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id }, 'secret', { expiresIn: 86400 });
        res.status(200).send({ token });
    } catch (error) {
        res.status(500).send({ message: 'Error logging in', error });
    }
};
