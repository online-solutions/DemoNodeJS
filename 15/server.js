/**
 * Created by SUCCESS\phungdinh on 4/20/15.
 */

var connect = require('connect');
var http = require('http');

var app = connect();

var doFirst = function(request, response, next){
    console.log("doFirst function");
    next();
}

var doSecond = function(request, response, next){
    console.log("doSecond function");
    next();
}
//app.use(doFirst);
//app.use(doSecond);

// connect module
function profile(request, response){
    console.log("in profile page");
}

function forum(request, response){
    console.log("User request forum");
}

app.use('/profile', profile);

http.createServer(app).listen(3000);
console.log("Server is now running...");

//var fs = require('fs');
//
//// 404 response
//function send404Response(res){
//    res.writeHead(404, {"Content-Type": "text/plan"});
//    res.write("ERROR 404: Page not found");
//    res.end();
//}
//
//// Handle requests
//function onRequest(req, res){
//    if(req.method == 'GET' && req.url == '/'){
//        res.writeHead(200, {"Content-Type": "text/html"});
//        fs.createReadStream('./index.html').pipe(res);
//    } else {
//        send404Response(res);
//    }
//}
//
//http.createServer(onRequest).listen(3000);
//
//console.log("Server is now running...");