'use strict';

const express = require('express');
const router = express.Router();

const animalModel = require('../models/animal.js');
const ModelCollection = require('../models/data-collection-class.js');

const animal = new ModelCollection(animalModel);

// RESTFUL APIs
router.get('/animal', getAllAnimals);
router.get('/animal/:id', getAnimal);
router.post('/animal', addAnimal);
router.put('/animal/:id', updateAnimal);
router.delete('/animal/:id', deleteAnimal);

// handlers
async function getAllAnimals(req, res) {
    const allAnimals = await animal.read();
    res.status(200).json(allAnimals);
}

async function getAnimal(req, res) {
    const id = req.params.id;
    const animalObj = await animal.read(id);
    res.status(200).json(animalObj);
}

async function addAnimal(req, res) {
    const animalObj = req.body;
    const addedAnimal = await animal.create(animalObj);
    res.status(200).json(addedAnimal);
}

async function updateAnimal(req, res) {
    const id = req.params.id;
    const animalObj = req.body;
    const updatedAnimal = await animal.update(id, animalObj);
    res.status(200).json(updatedAnimal);
}

async function deleteAnimal(req, res) {
    const id = req.params.id;
    const deletedAnimal = await animal.delete(id);
    res.status(200).json(deleteAnimal);
}
module.exports = router;