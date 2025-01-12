function solve(inputArr) {
    const map = new Map();
    for (const el of inputArr) {
        let [productName, quantity] = el.split(` `);
        quantity = Number(quantity);

        if (map.has(productName)) {
            map.set(productName, map.get(productName) + quantity);
        }
        else {
            map.set(productName, quantity);
        }
        
    }
    for (const [key,value] of map) {
        console.log(`${key} -> ${value}`);
    }
}
solve(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
    );
solve(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
    );