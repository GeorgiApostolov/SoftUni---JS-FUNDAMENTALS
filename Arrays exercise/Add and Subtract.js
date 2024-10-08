function solve(arr) {
    let sumOriginal = 0;
    let sumFinal = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOriginal += arr[i];
        if (arr[i] % 2 === 0) {
            arr[i] += i;
        }
        else {
            arr[i] -= i;
        }
        sumFinal += arr[i];
    }
    console.log(arr);
    console.log(sumOriginal);
    console.log(sumFinal);
}
//solve([5, 15, 23, 56, 35]);
solve([-5, 11, 3, 0, 2]);