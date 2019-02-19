const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const RevenueSchema = new Schema ({
	name: String,
	amount: Number
})

module.exports = mongoose.model('Revenue', RevenueSchema)