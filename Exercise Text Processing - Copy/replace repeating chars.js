function solve(inputStr) {
    let inputStrArr = inputStr.split(``);
    let firstEl = inputStrArr[0];
    let output = `${firstEl}`;
    for (let i = 0; i < inputStrArr.length; i++) {
        let currentEl = inputStrArr[i];
        let nextEl = inputStrArr[i+1];

        if (currentEl !== nextEl && currentEl !== undefined && nextEl !== undefined) {
            output += nextEl;
        }
        
    }
    console.log(output);
}
solve('aaaaabbbbbcdddeeeedssaa');
solve('qqqwerqwecccwd');