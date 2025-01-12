function solve(arr) {
    let obj = {};

    for (const el of arr) {
        let [name, code] = el.split(` -> `);
        if (name in obj) {
            if (!obj[name].includes(code)) {
                obj[name].push(code);
            }           
        }
        else {
            obj[name] = [code];
        }
    }

    let sorted = Object.entries(obj).sort();

    for (const [key, value] of sorted) {
        console.log(key);
        for (const el of value) {
            console.log(`-- ${el}`);
        }
    }
    
}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    );
solve([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    );