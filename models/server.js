require('dotenv').config()
const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.server = express();
        this.port = process.env.PORT || 3000;

        this.middleware();
        this.routes();
        this.deployServer();
    }

    middleware() {
        this.server.use(express.json());
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(cors());
    }

    routes() {
        this.server.use('/api', require('../routes/email'));
    }

    deployServer() {
        this.server.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
}

module.exports = Server;