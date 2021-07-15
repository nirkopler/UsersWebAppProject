require('dotenv').config()
const express = require('express');
const cors = require('cors');
const productsRouter = require('./routers/usersRouter')

// Create an EXPRESS instance
const app = express()

// Enable CORS policy and POST option
app.use(cors());
app.use(express.json());

// Database Connection
require('./config/databaseConnection');

// Connect to Router
//app.use('/api/users', productsRouter);

// Get port for .env
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server Is Running at http://localhost:${port}`)
});