const express = require('express')
const parser = require('body-parser')
// const mongoose = require('./Models/Revenue')
const Revenue = require('./Models/Revenue')

// const ExpenseMongoose = require('./Models/Expense')
const Expense = require('./Models/Expense')

// const Expense = ExpenseMongoose.model('Revenue')
// const Revenue = mongoose.model('Revenue')

const cors = require('cors')
const app = express()



app.use(parser.json())
app.use(cors());
app.use(require('./Routes/indexRoutes'))

// app.use(require('./Routes/indexRoutes'))


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


   app.get("/expense", (req, res) => {
    // response.send("Hello WOorld")

   
    Expense.find()
          .then((expense) => {
            res.json(expense)
          })
          .catch((err) => {
            console.log(err)
          })

   } )

app.listen(1000,(req, res) => {
    console.log('listening on port 1000')
} )