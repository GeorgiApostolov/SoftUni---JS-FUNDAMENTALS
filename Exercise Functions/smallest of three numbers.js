function solve(firstNum, secondNum, thirdNum) {
    function smallestNum(firstNum, secondNum, thirdNum) {
        let output = firstNum;
        if (secondNum < output) {
            output = secondNum;
        }
        if (thirdNum < output) {
            output = thirdNum;
        }
        print(output);
    }
    function print(output) {
        console.log(output);
    }
    smallestNum(firstNum, secondNum, thirdNum);
}
solve(2,
    5,
    3
);
solve(600,
    342,
    123
);
solve(25,
    21,
    4
);
solve(2,
    2,
    2
);