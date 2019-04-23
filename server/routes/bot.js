const express = require("express");
const router = express.Router();
const request = require('request');

router.post('/auth', (req, res) => {
    const data = req.post;
    request({
        headers: {
            'Authorization': 'Bearer YBKB01qSqBs.YLZTs7QNRPLeCZpsZKlos4X-zEMwjGzLd_eJSOkPYI0'
        },
        uri: 'https://directline.botframework.com/v3/directline/conversations',
        body: data,
        method: 'POST'
    }, function (error, response, body) {
        console.log(response.body);
        return res.send(response.body);
    });
});

router.post('/sendActivity', (req, res) => {
    const data = req.body;
    console.log(data.message);
    request({
        headers: {
            'Authorization': 'Bearer YBKB01qSqBs.YLZTs7QNRPLeCZpsZKlos4X-zEMwjGzLd_eJSOkPYI0',
            'Content-Type': 'application/json'
        },
        uri: 'https://directline.botframework.com/v3/directline/conversations/'+ data.convId + '/activities',
        body: 
            JSON.stringify({
            "type": "message",
            "from": {
                "id": 'user'
            },
            "text": data.message,
        }),
        method: 'POST'
        
    }, function (error, response, body) {
        console.log(response.body);
        return res.send(response.body);
    });
});


router.get('/retrieveActivity/:id/:watermark', (req,res) => {
    data = req.params;
    request({
        headers: {
            'Authorization': 'Bearer YBKB01qSqBs.YLZTs7QNRPLeCZpsZKlos4X-zEMwjGzLd_eJSOkPYI0'
        },
        uri: 'https://directline.botframework.com/v3/directline/conversations/'+ data.id + '/activities?watermark='+ data.watermark,
        method: 'GET'
    }, function (error, response, body) {
        console.log(response.body);
        return res.send(response.body);
    });

});

module.exports = router;