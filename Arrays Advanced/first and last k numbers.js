function solve(arr) {
    let k = arr.shift();
    let lastStartIndex = arr.length - k;
    let first = arr.slice(0, k);
    let last = arr.slice(lastStartIndex, arr.length);
    console.log(first.join(` `));
    console.log(last.join(` `));
}
solve([2, 7, 8, 9]);
solve([3,6, 7, 8, 9]);