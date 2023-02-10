const { AirportService } = require('../services/index');
const airportService = new AirportService();


const create = async (req, res) => {
    try {
        const airportData = {
            name: req.body.name,
            cityId: req.body.cityId
        }
        const airport = await airportService.create(airportData);
        return res.status(201).json({
            data: airport,
            success: true,
            message: 'Successfully created a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a airport',
            err: error
        });
    }
}

// DELETE --> /city/:id 
const destroy = async (req, res) => {
    try {
        const response = await airportService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a airport',
            err: error
        });

    }
}

// GET --> /city/:id
const get = async (req, res) => {
    try {
        const airport = await airportService.get(req.params.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch a city',
            err: error
        });
    }
}

// PATCH --> /city/:id
const update = async (req, res) => {
    try {
        const response = await airportService.update(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully updated a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update a city',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airports = await airportService.getAll(req.query);
        return res.status(201).json({
            data: airports,
            success: true,
            message: 'Successfully fetched all airports',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch airports',
            err: error
        });
    }
}

module.exports = {
    create,
    update,
    destroy,
    get,
    getAll
}