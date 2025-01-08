function solve(arr) {
    for (let el of arr) {
        let [townName, latitude, longitude] = el.split(` | `);
        latitude = Number(latitude);
        longitude = Number(longitude);

        let obj = {
            townName: townName,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        }
        console.log(obj);
    }
}
solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
solve(['Plovdiv | 136.45 | 812.575']);