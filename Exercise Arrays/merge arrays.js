function mergeArrays(firstArr, secondArr) {
    let outputArr = [];
    for (let i = 0; i < firstArr.length; i++) {
        let index = i;
        if (index % 2 === 0) {
            let firstNum = +firstArr[index];
            let secondNum = +secondArr[index];
            outputArr.push(firstNum+secondNum);
        }
        else {
            let firstStr = firstArr[index];
            let secondStr = secondArr[index];
            outputArr.push(firstStr+secondStr);
        }
    }
    console.log(outputArr.join(` - `));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);