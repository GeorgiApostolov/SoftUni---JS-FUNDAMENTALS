function solve(arr) {
    let even = 0
    let odd = 0
    for (let el of arr) {
        if (el % 2 == 0) {
            even+= +el
        }
        else {
            odd += +el
        }
    }
    console.log(even-odd);
}
solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);
