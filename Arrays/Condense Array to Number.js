function solve(arr) {
    let condensed = [];
    let curentNum ;
    let nextNum ;
    while (arr.length > 1) {
        for (let i = 0; i < arr.length-1; i++) {
            curentNum = arr[i];
            nextNum = arr[i+1];
            condensed.push(curentNum+nextNum);
        }
        arr = condensed;
        condensed = [];
    }
    console.log(arr[0]);
}
solve([2,10,3]);
solve([5,0,4,1,2]);
solve([1]);