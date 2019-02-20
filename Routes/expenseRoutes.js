const express = require('express')
const router = express.Router()
const mongoose = require('./../Models/Expense')
const Expense = mongoose.model('Expense')

module.exports = router