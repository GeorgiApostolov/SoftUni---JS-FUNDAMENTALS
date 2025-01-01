function rightPlace(firstWord, letter, rightWord) {
    let arr = firstWord.split(``);
    let newStr = ``;
    for (const el of arr) {
        if (el === `_`) {
            newStr += letter;
        }
        else {
            newStr += el;
        }
        
    }
    if (newStr === rightWord) {
        console.log(`Matched`);
    }
    else {
        console.log(`Not Matched`);
    }
}
rightPlace('Str_ng', 'i', 'String');