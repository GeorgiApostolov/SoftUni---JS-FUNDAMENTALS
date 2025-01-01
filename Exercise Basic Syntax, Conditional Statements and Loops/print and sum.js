function printAndSum(start, end) {
    let arr = [];
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
        arr.push(i);
    }
    console.log(arr.join(` `));
    console.log(`Sum: ${sum}`);
}
printAndSum(5, 10);