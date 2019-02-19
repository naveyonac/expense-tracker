const express = require('express')
const router = express.Router()


router.use('/revenue', require('./revenueRoutes'))
router.use('/expense', require('./expenseRoutes'))


module.exports = router 