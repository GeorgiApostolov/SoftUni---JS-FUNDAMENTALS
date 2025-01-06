function solve(arr) {
    arr = arr.map(Number);
    let firstEl = arr[0];
    let lastEl = arr[arr.length -1];
    console.log(firstEl+lastEl);
}
solve(['20', '30', '40']);
solve(['5', '10']);