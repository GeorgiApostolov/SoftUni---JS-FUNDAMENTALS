function maxNumber(inputArr) {
    let outputArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        let currentNum = inputArr[i];
        let topNum = currentNum;
        for (let j = i+1; j < inputArr.length; j++) {
            let rightNum = inputArr[j]
            if (rightNum > topNum) {
                topNum = rightNum;
            }
        }
        if (outputArr.includes(topNum)){

        }
        else {
            outputArr.push(topNum);
        }

    }
    console.log(outputArr.join(` `));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);