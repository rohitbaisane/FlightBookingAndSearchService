const { Flights } = require('../models/index');
const { compareTime } = require('../utils/helper');
class FlightRepository {

    async createFlight(data) {
        try {
            if (!compareTime(data.departureTime, data.arrivalTime)) {
                throw {
                    err: 'Arrival date and time cannot be less then depature date and time'
                };
            }
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async getAllFlights(filter) {
        try {
            const flights = await Flights.findByPk();
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

}


module.exports = FlightRepository;