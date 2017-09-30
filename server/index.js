const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

// database setup
mongoose.connect('mongodb://localhost:reactnodeauth/auth');

// express application
const app = express();
const router = require('./router');

app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// server setup
const PORT = process.env.PORT || 8080;
const server = http.createServer(app);
server.listen(PORT);
console.log(`Server listening on ${PORT}`);
