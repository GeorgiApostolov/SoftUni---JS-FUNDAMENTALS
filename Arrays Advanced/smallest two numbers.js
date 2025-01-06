function solve(arr) {
    let sortedArr = arr.sort((a, b) => a-b);
    let outputArr = sortedArr.slice(0,2);
    console.log(outputArr.join(` `));
}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);