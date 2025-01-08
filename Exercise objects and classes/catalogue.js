function solve(inputArr) {
    let sortedArr = inputArr.sort();
    let memoryLetter = [];
    for (let el of sortedArr) {
        let splited = el.split(``);
        let firstLetter = splited.shift();
        let [productName, productPrice] = el.split(` : `);
        let obj = {
            productName: productName,
            productPrice: productPrice
        }

        if (!memoryLetter.includes(firstLetter)) {
            console.log(firstLetter);
            console.log(` ${obj.productName}: ${obj.productPrice}`);
            memoryLetter.push(firstLetter);
        }
        else {
            console.log(` ${obj.productName}: ${obj.productPrice}`);
        }
    }
}
solve([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
    ]);

// solve([
//     'Omlet : 5.4',
//     'Shirt : 15',
//     'Cake : 59'
//     ]
//     );