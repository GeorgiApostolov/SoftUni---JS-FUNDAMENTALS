function solve(inputStr, digitForCount) {
    let strArr = inputStr.split(` `);
    let count = 0;
    for (const word of strArr) {
        if (word === digitForCount) {
            count++;
        }
    }
    console.log(count);
}
solve('This is a word and it also is a sentence',
'is'
);
solve('softuni is great place for learning new programming languages',
'softuni'
);