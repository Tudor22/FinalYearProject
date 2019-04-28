const express = require("express");
const User = require('../models/users');
const router = express.Router();
const request = require('request');

router.post('/location', (req, res) => {
    const url = 'https://atlas.microsoft.com/search/address/reverse/crossstreet/json?query=' + req.body.latitude + ',' + req.body.longitude +
        '&api-version=1.0&subscription-key=OTcP25vYNDubsAoCXV0kArBgaqFZPO35ytCPSIgtW2w';
    if (req.body.latitude == '' || req.body.longitude == '') {
        res.status(401).json({  //No coordinates
            success: false
        });
    } else {
        request(url, function (error, response, body) {
            var city = JSON.parse(response.body);
            city = city.addresses[0].address.municipality;
            console.log(response.body);
            console.log(city);
            res.status(200).json({  //Successfully got city name
                success: true,
                city: city
            });
        });
    }
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.status(200).json({  //Successfully logout and destroyed session
        success: true
    });
});

router.get('/isloggedin', (req, res) => {
    res.status(200).json({  //Successfully checked if user is logged in
        status: !!req.session.user
    });
});

router.get('/data', async (req, res) => {
    await User.findOne({ email: req.session.user }) // Look for the email address in the database
        .then(user => {
            if (!user) {
                return res.status(401).json({ // Return 401 user not found
                    status: false,
                    message: 'User not found'
                });
            }
            else {
                res.status(200).json({  //Successfully get user data
                    status: true,
                    email: req.session.user,
                    quote: user.quote
                });
            }
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({ // Return 401 error
                messsage: "Error"
            });
        });

        /*
    var user = await User.findOne({ email: req.session.user });
    if (!user) {
        res.json({
            status: false,
            message: 'User was delete'
        });
    } else {
        res.json({
            status: true,
            email: req.session.user,
            quote: user.quote
        });
    }*/
});

router.post('/quote', async (req, res) => {
    await User.findOne({ email: req.session.user }) // Look for the email address in the database
        .then(async user => {
            if (!user) {
                return res.status(401).json({ // Return 401 invalid user
                    success: false,
                    message: 'Invalid user'
                });
            }
            else {
                await User.findOneAndUpdate({ email: req.session.user }, { $set: { quote: req.body.value } }, { upsert: true });
                res.status(200).json({  //Successfully get user quote
                    success: true
                });
            }
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({ // Return 401 error
                messsage: "Error"
            });
        });
    /*
    var user = await User.findOne({ email: req.session.user });
    if (!user) {
        res.json({
            success: false,
            message: 'Invalid user'
        });
        return
    }
    await User.findOneAndUpdate({ email: req.session.user }, { $set: { quote: req.body.value } }, { upsert: true });
    res.json({
        success: true
    });*/
});
module.exports = router;