const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('./Models/Revenue')
const Revenue = mongoose.model('Revenue')

// const cors = require('cors')
const app = express()



app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(require('./Routes/indexRoutes'))



app.get("/", (req, res) => {
    // response.send("Hello WOorld")

   
        gif.find()
          .then((gifs) => {
            res.json(gifs)
          })
          .catch((err) => {
            console.log(err)
          })

   } )


app.listen(1000,(req, res) => {
    console.log('listening on port 1000')
} )