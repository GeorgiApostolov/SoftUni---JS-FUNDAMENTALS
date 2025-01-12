function solve(inputArr) {
    let obj = {};

    for (let i = 0; i < inputArr.length; i += 2) {
        let quantity = inputArr[i+1];
        let resource = inputArr[i];
        quantity = Number(quantity);

        if (resource in obj) {
            obj[resource] += quantity
        }
        else {
            obj[resource] = quantity;
        }
    }
    
    for (const key in obj) {
        let value = obj[key];

        console.log(`${key} -> ${value}`);
    }
}
solve([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
    ]
    );
solve([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
    );