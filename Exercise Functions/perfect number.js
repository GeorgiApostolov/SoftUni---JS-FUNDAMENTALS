function solve(num) {
    if (num <= 0) {
        console.log(`It's not so perfect.`);
        return;
    }

    let sum = 0;

    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    if (sum % num === 0) {
        console.log(`We have a perfect number!`);
    }
    else {
        console.log(`It's not so perfect.`);
    }
}
solve(6);
solve(28);
solve(1236498);