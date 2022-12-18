const express = require('express');

const setupAndStartServer = async() => {

    //create the express object and make it listen to PORT.
    const app = express();
    const PORT = 3000;
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();