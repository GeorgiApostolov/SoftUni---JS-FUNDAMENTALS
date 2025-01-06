function mathPower(num, pow) {
    function power(num,pow) {
        let outputPower = Math.pow(num,pow);
        print(outputPower);
    }
    function print(outputPower) {
        console.log(outputPower);
    }
    power(num,pow);
}
mathPower(3, 4);