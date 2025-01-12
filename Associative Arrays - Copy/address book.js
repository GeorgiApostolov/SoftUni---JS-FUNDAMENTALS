function solve(inputArr) {
    let obj = {};

    for (const el of inputArr) {
        let [name, address] = el.split(`:`);

        obj[name] = address;
    }
    let sorted = Object.entries(obj).sort(([aKey, aValue], [bKey, bValue]) => aKey.localeCompare(bKey));
    for (const el of sorted) {
        let [name, address] = el;
        console.log(`${name} -> ${address}`);
    }
}
// solve(['Tim:Doe Crossing',
//     'Bill:Nelson Place',
//     'Peter:Carlyle Ave',
//     'Bill:Ornery Rd']
//    );
solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
    );