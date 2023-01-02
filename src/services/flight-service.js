const { FlightRepository, AirplaneRepository } = require('../repository/index');

class FlightService {

    constructor() {
        this.airplaneRepository = new AirplaneRepository();
        this.flightRepository = new FlightRepository();
    }
    async createFlight(data) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({ ...data, totalSeats: airplane.capacity });
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async getFlight(data) {
        try {
            const flight = await this.flightRepository.getFlight(data.id);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }

    async getAllFlights(data) {
        try {
            const flight = await this.flightRepository.getAllFlights(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong at service layer");
            throw error;
        }
    }
}

module.exports = FlightService;
/*
Date I will get in this layer

{
    id,
    FlightNumber,
    airplanId,
    arrivalTime,
    departureTime,
    arrivalAirportId,
    departureAirportId
    price,

}




*/