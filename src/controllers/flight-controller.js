const { FlightService } = require('../services/index');

const flightService = new FlightService();
const create = async (req, res) => {
    try {
        const flightData = {
            id: req.body.id,
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            arrivalAirportId: req.body.arrivalAirportId,
            departureAirportId: req.body.departureAirportId,
            price: req.body.price
        };
        const flight = await flightService.createFlight(flightData);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const get = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully fetched a flight',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch a flight',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(201).json({
            data: flights,
            success: true,
            message: 'Successfully fetched all flights',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to fetch all flights',
            err: error
        });
    }
}
// DELETE --> /city/:id 

module.exports = {
    create,
    get,
    getAll
}