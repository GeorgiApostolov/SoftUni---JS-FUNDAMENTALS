function solve(json) {
    let obj = JSON.parse(json);
    for (const key in obj) {
        let value = obj[key];

        console.log(`${key}: ${value}`);
    }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');