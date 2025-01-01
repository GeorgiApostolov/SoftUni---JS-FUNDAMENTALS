function rouding(num, decimal) {
    if (decimal > 15) {
        decimal = 15;
    }
    console.log(parseFloat(num.toFixed(decimal)));
}
rouding(10.5,3)