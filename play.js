/**
 * Created by SUCCESS\phungdinh on 4/20/15.
 */

var lite = {
    favFood: "beefsteak",
    favMovie: "Snowy",
    printlnSomething: function(){
        console.log("My name is Lite");
        console.log(this === lite);
    }
}

var key = lite;
key.favFood = "rice";

console.log(lite.favFood);

// test == and ===

console.log(21 == '21'); // true
console.log(21 === '21'); // false


// test this
function doSomethingOutOfObject(){
    console.log("\n I am your King");
    console.log(this == global);
}

lite.printlnSomething();
doSomethingOutOfObject();