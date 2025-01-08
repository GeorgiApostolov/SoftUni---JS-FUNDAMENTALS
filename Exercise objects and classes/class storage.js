function solve(params) {

    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.totalCost = 0;
            this.arr = [];
        }

        addProduct(obj) {
            this.capacity -= obj.quantity;
            this.totalCost += obj.price * obj.quantity;
            this.arr.push(obj);
        }


        getProducts() {
            return this.arr.map(product => JSON.stringify(product)).join('\n');
        }
    }


    let productOne = {name: 'Cucamber', price: 1.50, quantity: 15};
    let productTwo = {name: 'Tomato', price: 0.90, quantity: 25};
    let productThree = {name: 'Bread', price: 1.10, quantity: 8};
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);

}
solve();