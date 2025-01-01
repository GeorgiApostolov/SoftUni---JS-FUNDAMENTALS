function amazingNumbers(num) {
    num = num.toString();
    let sum = 0;
    let str = ``;
    for (let i = 0; i < num.length; i++) {
        sum += Number(num[i]);

    }
    sum = sum.toString();
    if (sum.includes(`9`)) {
        str += num + ` Amazing? ` + `True`;
    }
    else {
        str += num + ` Amazing? ` + `False`;
    }
    console.log(str);
}
amazingNumbers(999)