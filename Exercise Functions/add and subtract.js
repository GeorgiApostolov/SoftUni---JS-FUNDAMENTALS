function solve(firstNum, secondNum, thirdNum) {
    const sum = (firstNum, secondNum) => firstNum + secondNum;
    function subtract(firstNum, secondNum, thirdNum) {
        let output = sum(firstNum,secondNum) - thirdNum;
        console.log(output);
    }
    subtract(firstNum, secondNum, thirdNum);
}
solve(23,
    6,
    10
);
solve(1,
    17,
    30
);
solve(42,
    58,
    100
);