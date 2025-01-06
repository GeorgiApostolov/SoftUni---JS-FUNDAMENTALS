function solve(inputArr) {
    let outputArr = [];

    for (let i = 0; i < inputArr.length; i++) {
        if (i % 2 !== 0) {
            outputArr.push(inputArr[i]*2);
        }
    }

    let reverseArr = outputArr.reverse();
    console.log(reverseArr.join(` `));
}
solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);