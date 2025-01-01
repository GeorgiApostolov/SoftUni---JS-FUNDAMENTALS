function triangleOfNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let arr = [];
        for (let j = 0; j < i; j++) {
            arr.push(i);
        }
        console.log(arr.join(` `));
    }
}
triangleOfNumbers(5)