/**
 * Created by SUCCESS\phungdinh on 4/20/15.
 */
var http = require('http');

function onRequest(req, res){
    console.log("A user made a request " + req.url);
    res.writeHead(200, {"Content-Type": "text/plan"});
    res.write("Hello World");
    res.end();
}

http.createServer(onRequest).listen(3000);

console.log("Server is now running...");