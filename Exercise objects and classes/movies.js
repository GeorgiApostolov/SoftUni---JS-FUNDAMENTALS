function movies(arr) {
    let outputArr = [];

    for (const el of arr) {
        if (el.includes(`addMovie`)) {
            let cmd = el.split(`addMovie `);
            let obj = {
                name: cmd[1]
            }
            outputArr.push(obj);
        }
        else if (el.includes(`directedBy`)) {
            let [filmName, director] = el.split(` directedBy `);

            let findMovie = outputArr.find(outputArr => outputArr.name === filmName);

            if (findMovie) {
                findMovie.director = director;
            }
        }
        else if(el.includes(`onDate`)) {
            let [movieName, date] = el.split(` onDate `);

            let findMovie = outputArr.find(outputArr => outputArr.name === movieName);

            if (findMovie) {
                findMovie.date = date;
            }
        }
    }
    for (const movie of outputArr) {
        let jsonFilm = JSON.stringify(movie);
        if (movie.name && movie.director && movie.date) {
            console.log(jsonFilm);
        }
    }
}
movies([
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
// movies([
//     'addMovie The Avengers',
//     'addMovie Superman',
//     'The Avengers directedBy Anthony Russo',
//     'The Avengers onDate 30.07.2010',
//     'Captain America onDate 30.07.2010',
//     'Captain America directedBy Joe Russo'
//     ]
//     );