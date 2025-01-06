function solve(sequenceNum, cmd) {
    let [specialNum, power] = cmd;
    while (sequenceNum.includes(specialNum)) {
        let index = sequenceNum.indexOf(specialNum);
        let startIndex = index - power;
        let deleteCount = power * 2 + 1;
        sequenceNum.splice(startIndex, deleteCount);
    }
    let sum = 0;
    for (const el of sequenceNum) {
        sum += el;
    }
    console.log(sum);
}
solve([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
solve([1, 4, 4, 2, 8, 9, 1], [9, 3]);
solve([1, 7, 7, 1, 2, 3], [7, 1]);
solve([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);