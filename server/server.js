const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const session = require('express-session')

app.use(session({
    secret: 'hello',
    proxy: true,
    resave: false,
    saveUninitialized: true,
    withCredentials: true,
}))

mongoose.Promise = Promise
//mongoose.connect('mongodb://localhost:27017/angulardb', {useNewUrlParser: true})
mongoose.connect('mongodb+srv://tudor:11iulie1996@angulardb-uoozy.azure.mongodb.net/angulardb?retryWrites=true', {useNewUrlParser: true})
.then(() => console.log('Mongoose up'))
mongoose.set('useFindAndModify', false);

const User = require('./models/users')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/api/login', async (req, res) => {
    const {email, password} = req.body
    const resp = await User.findOne({email, password})
    if(!resp){
        res.json({
            success: false,
            message: "Incorrect details"
        })
    } else {
        res.json({
            success: true
        })
        req.session.user = email
        req.session.save() 
        console.log("logging you in")
    }
})

app.get('/api/isloggedin', (req, res) => {
    res.json({
        status: !!req.session.user
    })
})


app.post('/api/register', async (req, res) => { 
    const {email, password} = req.body

    const existingUser = await User.findOne({email})
    if(existingUser){
        res.json({
            success: false,
            message: "Email already in use"
        })
        return
    }

    const user = new User({
        email,
        password
    })

    const result = await user.save()
    res.json({
        success: true,
        message: "Welcome"
    })

})

app.get('/api/data', async (req, res) => {
    //res.status(200).send('User is =>' + req.session.user)
    const user = await User.findOne({email: req.session.user})

    if(!user){
        res.json({
            status: false,
            message: 'User was delete'
        }) 
    } else {
        res.json({
            status: true,
            email: req.session.user,
            quote: user.quote
        })
    } 
})

app.post('/api/quote', async (req, res) => {
    const user = await User.findOne({email: req.session.user})
    if(!user){
        res.json({
            success: false,
            message: 'Invalid user'
        })
        return
    }

    await User.findOneAndUpdate({email: req.session.user}, { $set: {quote: req.body.value }}, {upsert: true})
    res.json({
       success: true
    })

})

app.get('/api/logout', (req, res) => {
    req.session.destroy()
    res.json({
        success: true
    })
})

app.listen(1234, () => console.log('Server listening at 1234'))