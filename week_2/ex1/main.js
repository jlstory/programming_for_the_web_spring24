const myMovies = ['The Nightmare Before Christmas', ' Christmas Vacation', ' What About Bob?', ' Original Star Wars Trilogy', ' LOTR Series '];
console.log('Some of my favorite movies are ', myMovies);
let yourMovie = window.prompt('What is your favorite movie?');
console.log('Your favorite movie is ' + yourMovie);
myMovies.push(yourMovie);
console.log ("Together our favorite movies are " + myMovies);
console.log('Using toString these are our movies kind of movies ' + myMovies.toString());