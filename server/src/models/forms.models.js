const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	input: {
		type: String,
		required: true,
	},
	value: {
		type: [ String ],
		required: true
	},
	answer: {
		type: String,
		required: true,
	},
})

module.exports = mongoose.model('form', formSchema);
