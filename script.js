"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели? ");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели? ");
    }
}

start();

let personalMoveDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Один из последних просмотренных фильмов: ", "");
        let b = prompt("На сколько оцените его?", "");
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMoveDB.muvies[a] = b;
            console.log("Ok");
        } else {
            console.log("Error");
            i--;
        }
    }
}

rememberMyFilms();

console.log(personalMoveDB);

function detectPersonalLevel() {
    if (personalMoveDB.count < 10) {
        alert("Просмотрено довольно мало фильмов: ");
    } else if ((personalMoveDB.count >= 10) & (personalMoveDB.count < 30)) {
        alert("Вы классический зритель: ");
    } else if (personalMoveDB.count >= 30) {
        alert("Вы киноман: ");
    } else {
        alert("Произошла ошибка: ");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    // if (personalMoveDB.privat == false) {
    //     console.log(personalMoveDB);
    // }
    if (!hidden) {
        console.log(personalMoveDB);
    }
}

showMyDB(personalMoveDB.privat);

function writeYouGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMoveDB.genres[i - 1] = genre;
    }
}

writeYouGenres();
console.log(personalMoveDB);