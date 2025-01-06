function solve(firstNum, secondNum) {
    let firstFactorial = 1;
    let secondFactorial = 1;
    for (let i = firstNum; i > 0; i--) {
        firstFactorial *= i;
    }
    for (let i = secondNum; i > 0; i--) {
        secondFactorial *= i;
    }
    console.log((firstFactorial / secondFactorial).toFixed(2));
}
solve(5, 2);
solve(6, 2);