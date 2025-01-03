function condenseArrayToNumber(inputArr) {
    let sum = 0;
    let currentArr = [];
    isTrue = false;
    while (isTrue === false) {
        if (inputArr.length === 1) {
            sum += inputArr[0];
            isTrue = true;
            break;
        }
        for (let i = 0; i < inputArr.length; i++) {
            let currentEl = +inputArr[i];
            let nextEl = +inputArr[i + 1];
            if (isNaN(nextEl)) {
                break;
            }
            else {
                currentArr.push(nextEl+currentEl);
            }
        }
        inputArr = currentArr;
        if (currentArr.length === 2) {
            for (const el of currentArr) {
                sum += el;
                isTrue = true;
            }
        } else {
            currentArr = [];
        }
    }
    console.log(sum);
}
condenseArrayToNumber([2,10,3]);
condenseArrayToNumber([5,0,4,1,2]);
condenseArrayToNumber([1]);