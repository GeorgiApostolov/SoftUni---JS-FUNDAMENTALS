function orders(productName, count) {
    function products(productName, count) {
        let price = 0;
        if(productName === `coffee`) {
            price = 1.50;
        }
        else if(productName === `water`) {
            price = 1.00;
        }
        else if(productName === `coke`) {
            price = 1.40;
        }
        else if(productName === `snacks`) {
            price = 2.00;
        }
        let output = price * count;
        print(output);
    }
    function print(output) {
        console.log(output.toFixed(2));
    }
    products(productName, count);
}
orders("water", 5);
orders("coffee", 2);