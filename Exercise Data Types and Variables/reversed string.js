function reversedString(str) {
    let arr = str.split(``);
    let strReversed = ``;
    for (let i = arr.length-1; i >= 0; i--) {
        strReversed += arr[i];
    }
    console.log(strReversed);
}
reversedString('Information');
reversedString('star');
reversedString('racecar');