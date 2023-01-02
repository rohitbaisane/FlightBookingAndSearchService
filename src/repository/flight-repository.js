const { Flights } = require('../models/index');
const { Op } = require('sequelize');

const { compareTime } = require('../utils/helper');
class FlightRepository {

    #createFilter(data) {
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if (data.minPrice && data.maxPrice) {
            Object.assign(filter, { price: { [Op.gte]: data.minPrice, [Op.lte]: data.maxPrice } });
        }
        else if (data.minPrice) {
            Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
        }
        else if (data.maxPrice) {
            Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
        }
        console.log(filter);
        return filter;
    }
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
            const customFilter = this.#createFilter(filter);
            const flights = await Flights.findAll({
                where: customFilter
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

}


/*

query 
{
     where:{
        price:{
            [Op.get]:minPrice,
            [Op.let]:maxPrice
        },
       arrivalAirportId:arrivalAirportId,
       departureAirportId:departureAirportId,

     }
}
filter object
{
  minPrice,
  maxPrice,
  arrivalAirportId,
  departureAirportId,
  price
}

*/

module.exports = FlightRepository;