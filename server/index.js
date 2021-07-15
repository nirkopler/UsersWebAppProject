require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const productsRouter = require('./routers/usersRouter')

// Create an EXPRESS instance
const app = express()

// Enable CORS policy & POST option & Morgan Logger Setup
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

// Database Connection
require('./config/databaseConnection');

// Connect to Router
app.use('/api/users', productsRouter);

// Handling Errors
app.use((err, req, res, next) => {
    return res.status(500).json({ error: err.toString() });
});

// Get port for .env
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Is Running at http://localhost:${port}`)
});