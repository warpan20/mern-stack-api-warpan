require('./db')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT

var postMessageRoutes = require('./controllers/postMessageController')


var app = express()
app.use(bodyParser.json())
app.use(cors({origin:'http://localhost:3000'}))
app.listen(port,()=>console.log('Server started at : 4000'))


app.use('/postMessages',postMessageRoutes)