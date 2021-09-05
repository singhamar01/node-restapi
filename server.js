require('dotenv').config()
//const npm = require('npm-commands');

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true }, function(err){
    if(err){
        console.log('MongoDB Connection Error. Start mongodb from root directory ')
    }
})
const db = mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open', () => console.log('Connected To Dabtase'))

app.use(express.json())

const subscribersRoute = require('./routes/subscribers')
app.use('/subscribers',subscribersRoute)

app.listen(3000,() => console.log('Server Started'))
