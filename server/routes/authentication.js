const express = require("express");
const User = require('../models/users');
const router = express.Router();

router.post('/login', async (req, res) => {
    var { email, password } = req.body;
    var user = await User.findOne({ email });
    if (!user) {
        res.json({
            success: false,
            message: "Wrong Email or Password"
        });
    }
    else if (!user.validPassword(password)) {
        res.json({
            success: false,
            message: "Wrong Email or Password"
        });
    }
    else {
        res.json({
            success: true
        });
        req.session.user = email;
        req.session.save();
        console.log("Logging you in");
    }
});

router.post('/register', async (req, res) => {
    var { email, password } = req.body;
    var existingUser = await User.findOne({ email })
    if (existingUser) {
        res.json({
            success: false,
            message: "Email already in use"
        });
        return
    }

    var newUser = new User();
    newUser.email = email;
    newUser.password = newUser.generateHash(password);

    var result = await newUser.save();
    res.json({
        success: true,
        message: "Welcome"
    });
});

module.exports = router;