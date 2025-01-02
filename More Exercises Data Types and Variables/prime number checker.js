function primeNumberChecker(number) {
    let isTrue = true;
    for (let i = 2; i <= number-1; i++) {
        if (number % i === 0) {
            isTrue = false;
        }
    }
    if (isTrue === true) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
primeNumberChecker(81);