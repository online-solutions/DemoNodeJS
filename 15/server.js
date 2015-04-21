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
app.use('/forum', forum);

http.createServer(app).listen(3000);
console.log("Server is now running...");
