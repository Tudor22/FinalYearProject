const app = require('./app');
const http = require('http');

const normalizePort = val => {
    var port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || "3000"); // Set up port process.env.PORT || "3000" means use whatever the environment variable PORT or 3000 if there's no port available
app.set("port", port); // Setting the port for the express app
const server = http.createServer(app); // Setup node server
server.listen(port); // Start the server