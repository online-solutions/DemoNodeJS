/**
 * Created by SUCCESS\phungdinh on 4/20/15.
 */
var fs = require('fs');

//fs.writeFileSync("food.txt", "we all need for life, plz don't waste it");

console.log(fs.readFileSync("food.txt").toString());

var path = require('path');
var websiteHome = "Desktop/Sport//themes/index.html";
var websiteAbout = "Desktop/Sport/themes/about.html";

console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout));

//
console.log(__dirname);
console.log(__filename);

setTimeout(function () {
    console.log("setTimeout running");
},2000);

setInterval(function () {
    console.log("setInterval running");
},2000);