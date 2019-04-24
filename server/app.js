const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const session = require('express-session');

// Imports backend routes
const authRoutes = require("./routes/authentication");
const userdataRoutes = require("./routes/userdata");
const botRoutes = require("./routes/bot");

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://tudor:11iulie1996@angulardb-uoozy.azure.mongodb.net/angulardb?retryWrites=true', { useNewUrlParser: true })
    .then(() => {
        console.log('Connected to the database!');
    })
    .catch(() => {
        console.log('Connection to database failed!');
    });
mongoose.set('useFindAndModify', false);

// Setup Express-session for cookies
app.use(session({
    secret: 'hello',
    proxy: true,
    resave: false,
    saveUninitialized: true,
    withCredentials: true,
}));

app.use("/", express.static(path.join(__dirname, "angular"))); // Connects to frontend and display the home page 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, UPDATE, OPTIONS");
    next();
});

app.use("/api/auth", authRoutes);
app.use("/api/userdata", userdataRoutes);
app.use("/api/bot", botRoutes);

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "angular", "index.html")); // Joining the angular frontend
});
module.exports = app;