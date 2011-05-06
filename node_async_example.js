var sys = require('sys'),
	path = require('path'),
	fs = require('fs');

var fileName = process.ARGV[2];
path.exists(fileName, function(exists) {
	if (!exists) {
		sys.puts(fileName + ' not found');
		return;
	}
	
	sys.puts('w00t! ' + fileName + ' exists!');
});
