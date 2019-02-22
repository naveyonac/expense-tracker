const express = require('express')
const router = express.Router()
const mongoose = require('./../Models/Revenue')
const Revenue = mongoose.model('Revenue')


//show all revenues page
router.get('/', (req, res) => {
    Revenue.find().then(result => {
        res.json(result)
    })
})

//revenues post request for new
router.post('/', (req, res) => {
    Revenue.create({
       name: req.body.name,
       amount: req.body.amount 
    }).then(newRevenue => {
        console.log(newRevenue)
        res.json(newRevenue)
    })
})

//revenue show one page
router.get('/:id', (req, res) => {
    Revenue.find({_id: req.params.id}).then(showOne => {
        res.json(showOne)
    })
})

//revenue post request for update
router.put('/:id', (req, res) => {
    Revenue.findOneAndUpdate({_id: req.params.id}).then(revenue => {
        res.json(revenue)
    
    })
})

//revenue post request for delete
router.delete('/:id', (req, res) => {
    Revenue.findOneAndRemove({_id: req.params.id}).then(result => {
        res.json(result)
    })
})


module.exports = router