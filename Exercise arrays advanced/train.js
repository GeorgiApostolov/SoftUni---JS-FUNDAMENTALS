function solve(arr) {
    let wagons = arr.shift().split(` `);
    wagons = wagons.map(Number);
    let maxCapacity = arr.shift();
    maxCapacity = Number(maxCapacity)

    for (const el of arr) {
        let currentArr = el.split(` `);
        if (currentArr.length > 1) {
            let count = currentArr[1];
            count = Number(count);
            wagons.push(count);
        }
        else {
            let count = currentArr[0];
            count = Number(count);
            for (const wagonPassengers of wagons) {
                if (wagonPassengers + count <= maxCapacity) {
                    let sum = wagonPassengers+count;
                    let index = wagons.indexOf(wagonPassengers);
                    wagons[index] = sum;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(` `));

}
solve(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']
    );
solve(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6']
    );