function reverseInPlace(inputArr) {
    let lastIndex = inputArr.length - 1;
    let outputArr = [];
    for (let i = lastIndex; i >= 0; i--) {
        outputArr.push(inputArr[i]);
    }
    console.log(outputArr.join(` `));
}
reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);
reverseInPlace(['33', '123', '0', 'dd']);