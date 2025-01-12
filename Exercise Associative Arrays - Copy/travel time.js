function solve(inputArr) {
    let obj = {};
    for (const el of inputArr) {
        let [country, city, travelCost] = el.split(` > `);
        if (country in obj) {
            if (obj[country][city] > travelCost) {
                obj[country][city] = travelCost;
            }
            if (!(city in obj[country])) {
                obj[country][city] = travelCost;
            }
        }
        else {
            obj[country] = {
            [city]: travelCost
            };
            
        }
    }
    

    let sortCountries = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (const [countryName, city] of sortCountries) {
        let sortCities = Object.entries(city).sort((a, b) => a[1]-b[1]);
        let outputStr = `${countryName}`;
        for (const [cityName, cost] of sortCities) {
            outputStr += ` -> ${cityName} -> ${cost}`;
        }
        console.log(outputStr);
    }

}
solve([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
    ]
    );
solve([
    'Bulgaria > Sofia > 25000',
    'Bulgaria > Sofia > 25000',
    'Kalimdor > Orgrimar > 25000',
    'Albania > Tirana > 25000',
    'Bulgaria > Varna > 25010',
    'Bulgaria > Lukovit > 10'
    ]
    );