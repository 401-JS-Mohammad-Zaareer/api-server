'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./src/server.js');

const PORT = process.env.PORT || 4000;
const MONGODB_URI = process.env.MONGODB_URI;

server.start(PORT);

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
}).then(() => console.log('conntected to mongoDB')).catch((err) => console.log(err));