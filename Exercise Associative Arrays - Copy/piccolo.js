function solve(inputArr) {
    let obj = {};
    for (const el of inputArr) {
        let [direction, carNumber] = el.split(`, `);
        if (direction === `IN`) {
            obj[carNumber] = direction;
        }
        else {
            delete obj[carNumber];
        }
    }
    
    let sorted = Object.entries(obj).sort(([aKey, aValue], [bKey, bValue]) => aKey.localeCompare(bKey));
    if (sorted.length === 0) {
        console.log(`Parking Lot is Empty`);
    }
    for (const [key,value] of sorted) {
            console.log(key);
    }
}
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
    );
solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
    );