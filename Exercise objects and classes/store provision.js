function solve(arr,deliveryArr) {
    let obj = {};

    for (let i = 0; i < arr.length; i += 2) {
        let product = arr[i];
        let quantity = Number(arr[i+1]);

        obj[product] = quantity;
    }

    for (let j = 0; j < deliveryArr.length; j += 2) {
        let product = deliveryArr[j];
        let quantity = Number(deliveryArr[j+1]);
        if (product in obj) {
            obj[product] += quantity;
        }
        else {
            obj[product] = quantity;
        }
    }
    for (const key in obj) {
        let value = obj[key];
        console.log(`${key} -> ${value}`);
    }
}
solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);

// solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
//     ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);