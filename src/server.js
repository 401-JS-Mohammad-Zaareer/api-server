'use strict';

const express = require('express');
const app = express();
const errorHandler = require('./error-handlers/500.js');
const notFoundHandler = require('./error-handlers/404.js');
const animalRoute = require('./routes/animal.js');
const gameRoute = require('./routes/game.js');

// global middlewares
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Welcomet to My REST API server");
});

app.use('/', animalRoute);
app.use('/', gameRoute);


app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`App is running on port ${port}`));
}

module.exports = {
    app,
    start
}