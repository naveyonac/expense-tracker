const express = require('express')
const router = express.Router()
const mongoose = require('./../Models/Expense')
const Expense = mongoose.model('Expense')



router.get('/expense', (req, res) => {
    Expense.find().then(result => {
        res.json(result)
    })
})
module.exports = router