const { AirplaneService } = require('../services/index');
const airplaneService = new AirplaneService();


const create = async (req, res) => {
    try {
        const airplaneData = {
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        }
        const airplane = await airplaneService.create(airplaneData);
        return res.status(201).json({
            data: airplane,
            success: true,
            message: 'Successfully created a airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a airplane',
            err: error
        });
    }
}

// DELETE --> /city/:id 
const destroy = async (req, res) => {
    try {
        const response = await airplaneService.delete(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete a airplane',
            err: error
        });

    }
}

// GET --> /city/:id
const get = async (req, res) => {
    try {
        const airplane = await airplaneService.get(req.params.id);
        return res.status(200).json({
            data: airplane,
            success: true,
            message: 'Successfully fetched a airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch a airplane',
            err: error
        });
    }
}

// PATCH --> /city/:id
const update = async (req, res) => {
    try {
        const response = await airplaneService.update(req.params.id, req.body);
        return res.status(201).json({
            data: response,
            success: true,
            message: 'Successfully updated a airplane',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update a airplane',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const airplanes = await airplaneService.getAll(req.query);
        return res.status(201).json({
            data: airplanes,
            success: true,
            message: 'Successfully fetched all airplanes',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch airplanes',
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