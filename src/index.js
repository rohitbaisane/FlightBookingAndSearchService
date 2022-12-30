const express = require('express');
const bodyParser = require('body-parser');

const { Airport, City } = require('./models/index');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');

const setupAndStartServer = async() => {
    try {
        //create the express object and make it listen to PORT.
        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));

        app.use('/api', apiRoutes);

        app.listen(PORT, () => {
            console.log(`Server started at ${PORT}`);
        });

        const city = await City.findOne({
            where: {
                id: 3
            }
        });
        const airport = await Airport.findOne({
            where: {
                name: 'rohit airport'
            }
        })
        await city.addAirport(airport);
    } catch (e) {
        console.log(e);
    }

}

setupAndStartServer();