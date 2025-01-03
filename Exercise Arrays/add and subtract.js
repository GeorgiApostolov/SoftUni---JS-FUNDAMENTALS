function addAndSubtract(inputArr) {
    let modifiedArr = [];
    for (const el of inputArr) {
        let currentIndex = inputArr.indexOf(el);
        if (el % 2 === 0) {
            modifiedArr.push(currentIndex+el);
        }
        else {
            modifiedArr.push(el-currentIndex);
        }
    }
    let inputSum = 0;
    let modifiedSum = 0;
    for (const el of inputArr) {
        inputSum += el;
    }
    for (const modifiedArrEl of modifiedArr) {
        modifiedSum += modifiedArrEl;
    }
    console.log(modifiedArr);
    console.log(inputSum);
    console.log(modifiedSum);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);