function equalSums(inputArr) {
    let isTrue = false;
    for (let i = 0; i < inputArr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let j = 0; j < i; j++) { //leftSum
            leftSum += inputArr[j];
        }
        for (let k = i+1; k < inputArr.length; k++) { //rightSum
            rightSum += inputArr[k];
        }

        if (leftSum === rightSum && leftSum > 0) {
            let index = i;
            console.log(index);
            isTrue = true;
            break;
        }

    }
    if (inputArr.length === 1) {
        console.log(0);
    }
    else if (isTrue === false) {
        console.log(`no`);
    }
}
equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);