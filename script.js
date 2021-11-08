"use strict";

let personalMoveDB = {
    count: 0,
    muvies: {},
    actors: {},
    privat: false,
    genres: [],
    start: function() {
        personalMoveDB.count = +prompt("Сколько фильмов Вы уже посмотрели? ");
        while (
            personalMoveDB.count == "" ||
            personalMoveDB.count == null ||
            isNaN(personalMoveDB.count)
        ) {
            personalMoveDB.count = +prompt("Сколько фильмов Вы уже посмотрели? ");
        }
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function() {
        if (personalMoveDB.count < 10) {
            alert("Просмотрено довольно мало фильмов: ");
        } else if ((personalMoveDB.count >= 10) & (personalMoveDB.count < 30)) {
            alert("Вы классический зритель: ");
        } else if (personalMoveDB.count >= 30) {
            alert("Вы киноман: ");
        } else {
            alert("Произошла ошибка: ");
        }
    },
    writeYouGenres: function() {
        for (let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == "" || genre == null) {
                console.log("Error");
                i--;
            } else {
                personalMoveDB.genres[i - 1] = genre;
            }
        }
        personalMoveDB.genres.forEach((item, index) => {
            console.log(`Любимый жанр ${index + 1} - это ${item}`);
        });
    },
    showMyDB: function(hiden) {
        if (!hiden) {
            console.log(personalMoveDB);
        }
    },
    toggleVisibleMyDB: function() {
        return this.privat == true ? (this.privat = false) : (this.privat = true);
    },
};
// personalMoveDB.count();
// personalMoveDB.rememberMyFilms();
// personalMoveDB.detectPersonalLevel();
// personalMoveDB.genres();
// personalMoveDB.showMyDB();

// console.log(personalMoveDB);

// detectPersonalLevel();