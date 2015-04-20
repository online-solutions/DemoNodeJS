/**
 * Created by SUCCESS\phungdinh on 4/20/15.
 */
var http = require('http');
var fs = require('fs');

// 404 response
function send404Response(res){
    res.writeHead(404, {"Content-Type": "text/plan"});
    res.write("ERROR 404: Page not found");
    res.end();
}

// Handle requests
function onRequest(req, res){
    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream('./index.html').pipe(res);
    } else {
        send404Response(res);
    }
}

http.createServer(onRequest).listen(3000);

console.log("Server is now running...");