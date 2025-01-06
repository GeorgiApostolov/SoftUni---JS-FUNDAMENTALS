function solve(inputArr) {
    let cubicOutput = [];
    const cubicYards = 195;
    inputArr = inputArr.map(Number);
    let copyArr = [];
    for (let copyEl of inputArr) {
        copyArr.push(+copyEl);
    }
    copyArr.sort((a,b) => a - b);
    let day = copyArr.shift();


    while (day < 30) {
        let cubicYardsTotal = 0;

        for (let i = 0; i < inputArr.length; i++) {
            if (inputArr[i] < 30) {
                cubicYardsTotal += cubicYards;
                inputArr[i] += 1;
            }
            
        }
        cubicOutput.push(cubicYardsTotal);
        day++;
    }
    
    let price = 1900;
    let sum = 0;

    for (let el of cubicOutput) {
        el = Number(el);
        sum += price*el;
    }
    console.log(cubicOutput.join(`, `));
    console.log(`${sum} pesos`);
}
solve([17, 22, 17, 19, 17]);