const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

const a = prompt("Последний просмотренный фильм?"),
    b = prompt("На скольуо оцените фильм?"),
    c = prompt("Последний просмотренный фильм?"),
    d = prompt("На скольуо оцените фильм?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);