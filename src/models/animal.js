'use strict';

const mongoose = require('mongoose');

const animalSchema = mongoose.Schema({
    name: { type: String, required: true },
    class: { type: String, enum: ['Mammals', 'Birds', 'Reptiles', 'Amphibians', 'Fish', 'Invertebrates'] },
    age: { type: Number, required: true }
});

const animalModel = mongoose.model('animal', animalSchema);
module.exports = animalModel;