const express = require('express')
const router = express.Router()
const mongoose = require('./../Models/Expense')
const Expense = mongoose.model('Expense')


//show all expense page
router.get('/show', (req, res) => {
    Expense.find().then(expense => {
        res.json(expense)
    })
})

//expense post request for new
router.post('/', (req, res) => {
    Expense.create({
       name: req.body.name,
       amount: req.body.amount 
    }).then(newRevenue => {
        console.log(newRevenue)
        res.json(newRevenue)
    })
})

//expense show one page
router.get('/:id', (req, res) => {
    Expense.findOne({_id: req.params.id}).then(showOne => {
        res.json(showOne)
    })
})

//expense post request for update
router.post('/:id', (req, res) => {
    Expense.findOneAndUpdate({_id: req.params.id}).then( expense => {res.json(expense)}
    )
})



//expense post request for delete
router.post('/id', (req, res) => {
    Revenue.findOneAndRemove({_id: req.params.id}).then()
})


module.exports = router