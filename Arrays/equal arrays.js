function equalArrays(inputArrFirst, inputArrSecond) {
    let index;
    let secondEl = 0;
    let sum = 0;
    for (const el of inputArrFirst) {
        if (Number(el) === Number(inputArrSecond[secondEl])) {
            sum += +el;
            secondEl++;
        } else {
            index = inputArrFirst.indexOf(el);
            break;
        }
    }
    if (index >= 0)  {
        console.log(`Arrays are not identical. Found difference at ${index} index`);
    }
    else {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }

}
equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5']);
equalArrays(['1'], ['10']);