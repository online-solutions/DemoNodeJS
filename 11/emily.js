/**
 * Created by SUCCESS\phungdinh on 4/20/15.
 */
var movies = require('./movies');
var emilyMovies = movies();
emilyMovies.favMovies = "The Notebook";
console.log("Emily's favorite movies is: " + emilyMovies.favMovies);