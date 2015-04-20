/**
 * Created by SUCCESS\phungdinh on 4/17/15.
 */
var http = require('http'),
    fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write("Hello World\n\n");

    // length of file
    var newfile = fs.createWriteStream('myfile.txt');
    var fileLength = req.headers['content-length'];
    var uploadedBytes = 0;

    //req.pipe(res, { end: false });
    //res.end();
    req.pipe(newfile);
    req.on('data', function(chunk){
        uploadedBytes += chunk.length;
        //completed percent
        var progress = uploadedBytes/fileLength * 100;
        // display complete percent
        console.log('Uploaded: ' + parseInt(progress, 10) + '%');
        res.write('Uploaded: ' + parseInt(progress, 10) + '% \n');
    });

    req.on('end', function(){
        res.end('Upload successful!');
    });

}).listen(3000);

console.log("Server listening in port 3000");

var currency = require('./currency_helper');
console.log(currency.changeUSDToVND(12));
console.log(currency.changeUSDToVND(12, 21000));
console.log(currency.changeVNDToUSD(12000000));

// not export -> private func -> error
//console.log(currency.changeVNDToEU(100000));