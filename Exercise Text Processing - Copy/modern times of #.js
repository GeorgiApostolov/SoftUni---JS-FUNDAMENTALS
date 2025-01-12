function solve(inputStr) {
    let strArr = inputStr.split(` `);
    let outputArr = [];
    for (const word of strArr) {
        if (word.includes(`#`)) {
            let wordSplit = word.split(`#`);
            if (wordSplit[1].length > 1) {
                outputArr.push(wordSplit[1]);
            }
            
        }
    }
    for (const el of outputArr) {
        console.log(el);
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');