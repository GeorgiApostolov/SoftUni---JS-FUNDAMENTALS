function findTopIntegers(arr) {
    let topIntegers = [];
    
    let currentMax = 0;
    
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > currentMax) {
            topIntegers.push(arr[i]);
            currentMax = arr[i];
        }
    }
    
    topIntegers.reverse();
    
    console.log(topIntegers.join(" "));
}
findTopIntegers([1, 4, 3, 2]);
//findTopIntegers([14, 24, 3, 19, 15, 17]);
//findTopIntegers([41, 41, 34, 20]);
//findTopIntegers([27, 19, 42, 2, 13, 45, 48]);
