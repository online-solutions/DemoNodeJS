/**
 * Created by SUCCESS\phungdinh on 4/20/15.
 */
var movies = require('./movies');
var liteMovies = movies();
liteMovies.favMovies = "How to train your dragon";
console.log("Lite's favorite movies is: " + liteMovies.favMovies);