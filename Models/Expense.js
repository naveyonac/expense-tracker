const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema ({
	name: String,
	amount: Number
})

module.exports = mongoose.model('Expense', ExpenseSchema)