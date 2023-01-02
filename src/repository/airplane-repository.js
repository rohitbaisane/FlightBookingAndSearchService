const { Airplan } = require('../models/index');

class AirplaneRepository {

    async getAirplane(airplanId) {
        try {
            const airplan = await Airplan.findByPk(airplanId);
            return airplan;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
}

module.exports = AirplaneRepository;