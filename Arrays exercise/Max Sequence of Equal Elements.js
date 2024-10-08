function solve(arr) {
    let finalArr = [];
    let currentArr = [arr[0]];

    for (let i = 1; i < arr.length; i++) {
        let curentNum = arr[i];

        if (currentArr[0] === curentNum) {
            currentArr.push(curentNum);
            if (currentArr.length > finalArr.length) {
                finalArr = currentArr;
            }
        }
        
        else {
            currentArr = [curentNum];
        }
    }
    console.log(finalArr.join(` `));
}
solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([1, 1, 1, 2, 3, 1, 3, 3]);
solve([4, 4, 4, 4]);
solve([0, 1, 1, 5, 2, 2, 6, 3, 3]);