function sorting(arr) {
    let smallestArr = arr.sort((a,b) => a-b);
    let copyArr = [];
    for (const el of smallestArr) {
        copyArr.push(el);
    }
    let biggestArr = copyArr.sort((a,b) =>b-a);
    let outputArr = [];
    for (let i = 0; i < Math.ceil(arr.length /2); i++) {
        outputArr.push(biggestArr[i]);
        outputArr.push(smallestArr[i]);
    }
    console.log(outputArr.join(` `));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);