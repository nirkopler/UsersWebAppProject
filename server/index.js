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

// Get port for .env
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Is Running at http://localhost:${port}`)
});