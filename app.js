var express 		= require('express'),
	app 			= express(),
	mongoose		= require('mongoose'),
	bodyParser		= require('body-parser'),
	methodOverride	= require('method-override'),
	passport 			= require('passport'),
	cookieParser  = require('cookie-parser'),
	expressSession = require('express-session');

var Contact			= require('./models/contact'),
	User				= require('./models/user'),
	seedDB			= require('./seeds'),
	PassportService = require('./services/passport');

var contactRoutes	= require('./routes/contactRoutes'),
    authRoutes = require('./routes/authRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contacts');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(expressSession({
	secret: 'contacts',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes);
app.use(contactRoutes);

seedDB();

app.listen(8080, function(){
	console.log('Started Server');
});
