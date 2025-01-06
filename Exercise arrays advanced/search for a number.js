function solve(firstArr, secondArr) {
    let [numEl, deleteCount, searchNum] = secondArr;
    let sliceArr = firstArr.slice(0, numEl);
    let countNum = 0;
    sliceArr.splice(0,deleteCount);
    for (const el of sliceArr) {
        if (el === searchNum) {
            countNum++;
        }
    }
    console.log(`Number ${searchNum} occurs ${countNum} times.`);
}
solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
solve([7, 1, 5, 8, 2, 7], [3, 1, 5]);