function solve(firstArr, secondArr) {
    let n = 0;
    let sum = 0;
    for (let el of firstArr) {
        if (el === secondArr[n]) {
            sum+= +el;
            n++;
        }
        else {
            console.log(`Arrays are not identical. Found difference at ${n} index`);
            break;
        }
    }   
    if (n === firstArr.length) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
   
}
solve(['10','20','30'], ['10','20','30']);
solve(['1','2','3','4','5'], ['1','2','4','4','5']);
solve(['1'], ['10']);