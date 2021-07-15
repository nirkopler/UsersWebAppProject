require('dotenv').config()
const mongoose = require('mongoose');

// Connection to MongoDB Database
mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});

// Handling Connection Error
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', () => {console.log('DB Connection Succeed!')});