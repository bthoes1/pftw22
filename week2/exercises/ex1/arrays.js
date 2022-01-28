let myMovies = [' The Corpse Bride', ' The Dark Crystal', ' Bridesmaids', ' The Queen', ' Spirited Away'];
console.log('My favorite movies are', myMovies);

let yourMovie = window.prompt("Enter your favorite movie.");
myMovies.push(' ' + yourMovie);

console.log('Your movie has been added to the list!', myMovies.toString());

window.alert('Here is our list of favorite movies: ' + myMovies.toString());