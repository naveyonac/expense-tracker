const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const app = express()


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(require('./Routes/indexRoutes.js'))


app.listen('6000',(req, res) => {
    console.log('listening on port 6000')
} )