function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        if (i >= 10) {
            i = i.toString();
            let numArr = i.split(``);
            for (let j = 0; j < numArr.length; j++) {
                sum += Number(i[j]);
            }
        }
        else {
            sum += i;
        }
        if (sum === 11 || sum === 7 || sum === 5) {
            console.log(`${i} -> True`);
        }
        else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(20);