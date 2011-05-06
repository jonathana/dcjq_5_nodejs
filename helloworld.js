var sys = require('sys'), 
  http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello World</h1>');
    res.end();
}).listen(8000);

sys.puts('Server running at http://0.0.0.0:8000/');

