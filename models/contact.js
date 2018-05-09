var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
	name: String,
	image: String,
	contact:
		{
			mobile: String,
			email: String
		},
	dob: String
});

module.exports = mongoose.model("Contact", contactSchema);