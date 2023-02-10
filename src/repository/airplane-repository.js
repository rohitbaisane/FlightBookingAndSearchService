const { Airplan } = require('../models/index');
const CrudRepository = require('./crud-repository');

class AirplaneRepository extends CrudRepository {

    constructor() {
        super(Airplan);
    }
}

module.exports = AirplaneRepository;