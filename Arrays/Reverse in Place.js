function solve(arr) {
    let middle = Math.floor(arr.length/2) - 1;
    for (let i = 0; i <= middle; i++) {
        let leftEl = arr[i];
        let rightEl = arr[arr.length-1-i];

        arr[i] = rightEl;
        arr[arr.length-1-i] = leftEl;
    }
    console.log(arr.join(` `));
}
solve(['a', 'b', 'c', 'd', 'e']);
solve(['abc', 'def', 'hig', 'klm', 'nop']);
solve(['33', '123', '0', 'dd']);