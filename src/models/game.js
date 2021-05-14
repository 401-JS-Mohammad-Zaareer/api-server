'use strict';

const mongoose = require('mongoose');

const gameSchema = mongoose.Schema({
    name: { type: String, required: true },
    size: { type: Number, required: true },
    level: { type: Number }
});

const gameModel = mongoose.model('game', gameSchema);
module.exports = gameModel;