function lowerOrUpper(letter) {
    let asciiindex = letter.charCodeAt(0);
    if (asciiindex < 96) {
        console.log(`upper-case`);
    }
    else {
        console.log(`lower-case`);
    }
}
lowerOrUpper(`f`);