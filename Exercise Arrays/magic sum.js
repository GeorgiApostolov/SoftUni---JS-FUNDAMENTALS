function magicSum(inputArr, inputSum) {
    for (let i = 0; i < inputArr.length-1; i++) {
        let firstNum = inputArr[i];
        for (let j = i+1; j < inputArr.length; j++) {
            let secondNum = inputArr[j];
            if (firstNum + secondNum === inputSum) {
                console.log(`${firstNum} ${secondNum}`);
            }
        }
    }
}
magicSum([1, 7, 6, 2, 19, 23], 8);
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
magicSum([1, 2, 3, 4, 5, 6], 6);