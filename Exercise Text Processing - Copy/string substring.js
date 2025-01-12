function solve(word, inputStr) {
    let lowerCaseWord = word.toLowerCase();
    let lowerCaseInputStr = inputStr.toLowerCase();
    let lowerCaseInputStrArr = lowerCaseInputStr.split(` `);
    let isFind = false;

    for (const currentWord of lowerCaseInputStrArr) {
        if (currentWord === word) {
            console.log(word);
            isFind = true;
            break;
        }
    }
    if (isFind == false) {
        console.log(`${word} not found!`);
    }
}
solve('javascript',
'JavaScript is the best programming language'
);
solve('python',
'JavaScript is the best programming language'
);