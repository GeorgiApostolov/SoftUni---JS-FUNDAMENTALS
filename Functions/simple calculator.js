function solve(firstNum, secondNum, operator) {
    let multiply = (firstNum,secondNum)=> {
        return firstNum * secondNum;
    }
    let divide = (firstNum,secondNum)=> {
        return firstNum / secondNum;
    }
    let add = (firstNum,secondNum)=> {
        return firstNum + secondNum;
    }
    let subtract = (firstNum,secondNum)=> {
        return firstNum - secondNum;
    }
    if (operator === `multiply`) {
        console.log(multiply(firstNum,secondNum));
    }
    else if (operator === `divide`) {
        console.log(divide(firstNum,secondNum));
    }
    else if (operator === `subtract`) {
        console.log(subtract(firstNum,secondNum));
    }
    else if (operator === `add`) {
        console.log(add(firstNum,secondNum));
    }
}
solve(5,
    5,
    'multiply'
);
solve(40,
    8,
    'divide'
);
solve(12,
    19,
    'add'
);
solve(50,
    13,
    'subtract'
);