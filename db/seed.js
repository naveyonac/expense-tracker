const mongoose = require('../Models/Expense')
const mongoose = require('../Models/Revenue')
const expenseData = require('./expenseSeed.json')
const revenueData = require('./revenueSeed.json')
const Expense = mongoose.model('Expense')
const Revenue = mongoose.model('Revenue')


Revenue.remove({})
  .then(() => {
    Revenue.collection.insert(revenueData)
      .then((revenue) => {
        console.log(revenue)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })
