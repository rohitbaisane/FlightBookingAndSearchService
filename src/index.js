const express = require('express');
const { PORT } = require('./config/serverConfig');
const setupAndStartServer = async() => {

    //create the express object and make it listen to PORT.
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();