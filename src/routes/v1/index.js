const express = require('express');

const cityController = require('../../controllers/city-controller');
const flightController = require('../../controllers/flight-controller');
const airportController = require('../../controllers/airport-controller');
const airplaneController = require('../../controllers/airplane-controller');

const router = express.Router();


router.post('/city', cityController.create);
router.get('/city/:id', cityController.get);
router.get('/city', cityController.getAll);
router.delete('/city/:id', cityController.destroy);
router.patch('/city/:id', cityController.update);

router.post('/flight', flightController.create);
router.get('/flight/:id', flightController.get);
router.get('/flight', flightController.getAll);

router.get('/airport/:id', airportController.get);
router.get('/airport', airportController.getAll);
router.post('/airport', airportController.create);
router.patch('/airport/:id', airportController.update);
router.delete('/airport/:id', airportController.destroy);

router.get('/airplane/:id', airplaneController.get);
router.get('/airplane', airplaneController.getAll);
router.post('/airplane', airplaneController.create);
router.patch('/airplane/:id', airplaneController.update);
router.delete('/airplane/:id', airplaneController.destroy);

module.exports = router;