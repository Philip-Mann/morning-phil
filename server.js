require('dotenv').config();
const express = require('express');
const path = require('path');
const { PORT } = process.env;

const server = express();

// Serving up the static build file for React
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));
server.use(express.json());

// endpoint to test server status
server.get('/heartbeat', (req, res) => {
    res.send({
        "Is": "working"
    });
});

server.get('*', function (req, res) {
    res.sendFile(__dirname + '/react-ui/build/index.html');
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});