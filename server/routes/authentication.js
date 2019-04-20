const express = require("express");
const User = require('../models/users');
const router = express.Router();


router.post('/login', async (req, res) => {
    var {email, password} = req.body;
    var resp = await User.findOne({email, password})
    if(!resp){
        res.json({
            success: false,
            message: "Incorrect details"
        });
    } else {
        res.json({
            success: true
        });
        req.session.user = email;
        req.session.save();
        console.log("logging you in");
    }
});

router.post('/register', async (req, res) => { 
    var {email, password} = req.body;
    var existingUser = await User.findOne({email})
    if(existingUser){
        res.json({
            success: false,
            message: "Email already in use"
        });
        return
    }

    var user = new User({
        email,
        password
    });

    var result = await user.save();
    res.json({
        success: true,
        message: "Welcome"
    });

});
module.exports = router;