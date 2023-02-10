const CrudRepository = require("./crud-repository");
const { Airport } = require("../models/index");

console.log(Airport);

class AirportRepository extends CrudRepository {
    constructor() {
        super(Airport);
    }

}

module.exports = AirportRepository;