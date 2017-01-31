
var mongoose = require('mongoose');

function setup() {
	var db = mongoose.connection;

	mongoose.connect('mongodb://admin:123456@ds113628.mlab.com:13628/fc');
	
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function() {
	    console.log("we're connected!")
	});
	
	return db;
}


module.exports = setup;