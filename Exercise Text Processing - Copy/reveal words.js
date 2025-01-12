function solve(wordsForPlace, inputStr) {
    let strArr = inputStr.split(` `);
    let wordsForPlaceArr = wordsForPlace.split(`, `);
    let output;
    for (const word of strArr) {
        if (word.includes(`*`)) {
            let wordLength = word.length;
            for (const wordPlace of wordsForPlaceArr) {
                if (wordPlace.length === wordLength) {
                    output = inputStr.replace(word, wordPlace);
                    inputStr = output;
                    break;
                }
            }
        }
    }
    console.log(output);
}
solve('great',
'softuni is ***** place for learning new programming languages'
);
solve('great, learning',
'softuni is ***** place for ******** new programming languages'
);