const expenseMongoose = require('../Models/Expense')
const revenueMongoose = require('../Models/Revenue')
const expenseData = require('./expenseSeed.json')
const revenueData = require('./revenueSeed.json')
const Expense = expenseMongoose.model('Expense')
const Revenue = revenueMongoose.model('Revenue')


Revenue.remove({})
  .then(() => {
      return
    Revenue.collection.insert(revenueData)
      .then((revenue) => {
        console.log(revenue)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })

  Expense.remove({})
  .then(() => {
    Expense.collection.insert(expenseData)
      .then((revenue) => {
        console.log(revenue)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })