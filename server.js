var http = require('http');
var url = require('url');

http.createServer(function (req, res){
	
	var pathname = url.parse(req.ur).pathname;
	if(pathname === '/')
	{
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end("index");
	}
	else if(pathname == "/musician")
	{
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end("musician");
	}
	else if(pathname == "/dev")
	{
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end("dev");
	}

}).listen(3030, "127.0.0.1");
console.log("Server Running");