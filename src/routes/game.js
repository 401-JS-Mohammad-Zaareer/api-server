'use strict';


const express = require('express');
const router = express.Router();

const ModelCollection = require('../models/data-collection-class.js');
const gameModel = require('../models/game.js');

const game = new ModelCollection(gameModel);

// RESTFUL APIs
router.get('/game', getAllGames);
router.get('/game/:id', getGame);
router.post('/game', addGame);
router.put('/game/:id', updateGame);
router.delete('/game/:id', deleteGame);

// handlers
async function getAllGames(req, res) {
    const allGames = await game.read();
    res.status(200).json(allGames);
}

async function getGame(req, res) {
    const id = req.params.id;
    const gameObj = await game.read(id);
    res.status(200).json(gameObj);
}

async function addGame(req, res) {
    const gameObj = req.body;
    const addedAnimal = await game.create(gameObj);
    res.status(200).json(addedAnimal);
}

async function updateGame(req, res) {
    const id = req.params.id;
    const gameObj = req.body;
    const updatedGame = await game.update(id, gameObj);
    res.status(200).json(updatedGame);
}

async function deleteGame(req, res) {
    const id = req.params.id;
    const deletedGame = await game.delete(id);
    res.status(200).json(deletedGame);
}

module.exports = router;