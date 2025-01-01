function sumDigits(num) {
    num = String(num);
    let arr = num.split(``);
    let sum = 0;
    for (const el of arr) {
        sum += +el;
    }
    console.log(sum);
}
sumDigits(245678);