function sumOfOddNum(num) {
    let sum = 0;
    let oddNumbers = 1;
    for (let i = 1; i <= num; i++) {
        console.log(oddNumbers);
        sum += oddNumbers;
        oddNumbers += 2;
        
    }
    console.log(`Sum: ${sum}`);
}
sumOfOddNum(5)