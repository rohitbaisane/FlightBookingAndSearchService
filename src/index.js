const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async() => {

    //create the express object and make it listen to PORT.
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();