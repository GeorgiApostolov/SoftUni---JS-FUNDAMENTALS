function solve(arr) {
    let moviesArr = [];

    for (const el of arr) {
        if (el.includes(`addMovie`)) {
            let filmName = el.split(`addMovie `);
            let obj = {
                name: filmName[1]
            }
            moviesArr.push(obj);
        }
        else if(el.includes(`directedBy`)) {
            let [movieName, director] = el.split(` directedBy `);

            let foundMovie = moviesArr.find(moviesArr => moviesArr.name === movieName);

            if (foundMovie) {
                foundMovie.director = director;
            }

        } 
        else if(el.includes(`onDate`)) {
            let [movieName, date] = el.split(` onDate `);

            let foundMovie = moviesArr.find(moviesArr => moviesArr.name === movieName);

            if (foundMovie) {
                foundMovie.date = date;
            }

        }
    }

    
    for (const movie of moviesArr) {
        let moviesArrJSON = JSON.stringify(movie);
        if (movie.name && movie.date && movie.director) {
            console.log(moviesArrJSON);
        }
    }
}
solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ]
    );