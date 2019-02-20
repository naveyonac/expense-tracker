const express = require('express')
const parser = require('body-parser')
const mongoose = require('./Models/Revenue')
const Revenue = mongoose.model('Revenue')

// const cors = require('cors')
const app = express()



app.use(parser.json())

app.use(require('./Routes/indexRoutes'))



app.get("/revenue", (req, res) => {
    // response.send("Hello WOorld")

   
        Revenue.find()
          .then((revenue) => {
            res.json(revenue)
          })
          .catch((err) => {
            console.log(err)
          })

   } )


app.listen(1000,(req, res) => {
    console.log('listening on port 1000')
} )