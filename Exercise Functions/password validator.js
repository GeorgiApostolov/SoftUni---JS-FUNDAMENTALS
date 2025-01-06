function solve(password) {
    let passwordArr = password.split(``);
    let countNumber = 0;
    let lengthStr = 0;
    let isTrue = true;
    let isDone = true;
    for (let el of passwordArr) {
        let asciiEl = el.charCodeAt(0);
        if (asciiEl >= 48 && asciiEl < 58) {
            countNumber++;
            lengthStr++;
        }
        else if(asciiEl >= 65 && asciiEl <= 90 || asciiEl >= 97 && asciiEl <= 122) {
            lengthStr++;
        } else {
            isTrue = false;
            lengthStr++;
        }
    }
    if (lengthStr < 6 || lengthStr > 10) {
        console.log(`Password must be between 6 and 10 characters`);
        isDone = false;
    }
    if (isTrue === false) {
        console.log(`Password must consist only of letters and digits`);
        isDone = false;
    }
    if (countNumber < 2) {
        console.log(`Password must have at least 2 digits`);
        isDone = false;
    }
    if (isDone === true) {
        console.log(`Password is valid`);
    }

}
//solve('logIn');
//solve('MyPass123');
solve('Pa$s$s');