const express = require("express");
const User = require('../models/users');
const router = express.Router();
const request = require('request');

router.post('/location', (req, res) => {
    var url = 'https://atlas.microsoft.com/search/address/reverse/crossstreet/json?query=' + req.body.latitude + ',' + req.body.longitude + 
    '&api-version=1.0&subscription-key=OTcP25vYNDubsAoCXV0kArBgaqFZPO35ytCPSIgtW2w';
    if(req.body.latitude == '' || req.body.longitude == ''){
        res.json({
            success: false
        }); 
    } else {
        request(url, function (error, response, body) {
            var city = data.addresses[0].address.municipality;
            console.log('error:', error);
            console.log('statusCode:', response && response.statusCode);
            console.log('body:', body);
            console.log(city);
            res.json({
                success: true, 
                city: city
            });
        });
    } 
});

router.get('/logout', (req, res) => {
    req.session.destroy();
    res.json({
        success: true
    });
});

router.get('/isloggedin', (req, res) => {
    res.json({
        status: !!req.session.user
    });
});

router.get('/data', async (req, res) => {
    var user = await User.findOne({email: req.session.user});
    if(!user){
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
    } 
});

router.post('/quote', async (req, res) => {
    var user = await User.findOne({email: req.session.user});
    if(!user){
        res.json({
            success: false,
            message: 'Invalid user'
        });
        return
    }
    await User.findOneAndUpdate({email: req.session.user}, { $set: {quote: req.body.value }}, {upsert: true});
    res.json({
       success: true
    });
});
module.exports = router;