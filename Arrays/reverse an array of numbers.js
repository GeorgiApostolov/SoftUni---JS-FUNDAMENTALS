function reverseAnArrayOfNumbers(n, arr) {
    let output = arr.slice(0, n);
    let reverseArray = [];
    for (let i = n-1; i >= 0; i--) {
        reverseArray.push(output[i]);
    }
    console.log(reverseArray.join(` `));

}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5]);
reverseAnArrayOfNumbers(2, [66, 43, 75, 89, 47]);