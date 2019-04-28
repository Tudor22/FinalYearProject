const express = require("express");
const User = require('../models/users');
const router = express.Router();

router.post("/login", (req, res, next) => {
    var { email, password } = req.body;
    User.findOne({ email }) // Look for the email address in the database
        .then(user => {
            if (!user) {
                return res.status(401).json({   // Return status 401 if user not found
                    message: "Login failed"
                });
            }
            return user.validPassword(password)
        })
        .then(result => {
            if (!result) {
                return res.status(401).json({ // Return 401 is password not found
                    messsage: "Login failed"
                });
            }
            else {
                req.session.user = email;
                req.session.save();
                return res.status(200).json({  //Successfully login
                    success: true
                });
            }
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({
                messsage: "Login failed"
            });
        });
});


router.post('/register', async (req, res) => {
    var { email, password } = req.body;
    User.findOne({ email }) // Look for the email address in the database
        .then(user => {
            if (!user) {
                var newUser = new User();
                newUser.email = email;
                newUser.password = newUser.generateHash(password);

                var result = newUser.save();
                return res.status(200).json({  //Successfully registration
                    success: true,
                    message: "Welcome"
                });
            }
            else {
                return res.status(401).json({ // Return 401 email already in use
                    success: false,
                    message: "Email already in use"
                });
            }
        })
        .catch(err => {
            console.log(err);
            return res.status(401).json({ // Return 401 error
                messsage: "Error"
            });
        });
});

module.exports = router;