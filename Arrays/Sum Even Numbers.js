function solve(arr) {
    let sum = 0;
    for(let el of arr) {
        if (el % 2 == 0) {
           sum+=+el 
        }
    }
    console.log(sum);
}
solve(['1','2','3','4','5','6']);
solve(['3','5','7','9']);
solve(['2','4','6','8','10']);
