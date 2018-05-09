var express = require('express'),
	router = express.Router({mergeParams: true}),
	bodyParser = require('body-parser');

var Contact	= require('../models/contact');
var defaultImage = 'https://www.hassanlab.eu/sites/default/files/2016-02/blank_person_51.png';

// INDEX - Landing Page
router.get('/', function(req, res){
	res.redirect('contacts');
});

// GET - View All
router.get('/contacts', function(req, res){
	Contact.find({}, function(err, contact){
		if(err){
			console.log(err);
		} else {
			res.render('./contacts', {contact, contact, user: req.user});
		}
	});
});

// SHOW - Show individual based on 'name'
router.get('/contacts/name/:tag', function(req, res){
	Contact.find({name: new RegExp(req.params.tag,'i')}, function(err, contacts){
		if(err){
			console.log(err);
		} else {
			res.write(JSON.stringify(contacts));
			res.end();
		}
	});
});

// SHOW - Show individual based on '_id'
router.get('/contacts/:id/id', function(req, res){
	Contact.findById(req.params.id, function(err, contact){
		if(err){
			console.log(err);
		} else {
			res.write(JSON.stringify(contact));
			res.end();
		}
	});
});

//CREATE - Create new
router.post('/contacts/add_new', function(req, res){
	var newContact = {
		name: req.body.contact.name,
		image: defaultImage,
		contact:{
			mobile: req.body.contact.mobile,
			email: req.body.contact.email
		},
		dob: req.body.contact.dob
	};
	Contact.create(newContact, function(err, contact){
		if(err){
			console.log(err);
		} else {
			res.redirect('/contacts');
		}
	});
});

// EDIT - Edit an existing contact
router.put('/contacts/:id/edit', function(req, res){
	var newContact = {
		name: req.body.name,
		contact:{
			mobile: req.body.contact.mobile,
			email: req.body.contact.email
		},
		dob: req.body.dob
	};
	Contact.findByIdAndUpdate(req.params.id, newContact, function(err, contact){
		if(err){
			console.log(err);
		} else {
			res.redirect('/contacts');
		}
	});
});

// DELETE - Delete a contact
router.delete('/contacts/:id/delete', function(req, res){
	Contact.findByIdAndRemove(req.params.id, function(err){
		if(err){
			console.log(err);
		} else {
			res.end();
		}
	});
});

module.exports = router;
