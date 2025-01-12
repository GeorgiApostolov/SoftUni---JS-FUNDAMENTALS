function solve(inputStr) {
    let firstWord = inputStr.split(``);
    let strLength = firstWord.length/2;
    let secondWord = firstWord.splice(0, strLength);
    let reversedFirstWord = firstWord.reverse();
    let reversedSecondWord = secondWord.reverse();
    let outputFirstWord = ``;
    let outputSecondWord = ``;
    for (const el of reversedFirstWord) {
        outputFirstWord += el;
    }
    for (const el of reversedSecondWord) {
        outputSecondWord += el;
    }
    console.log(outputSecondWord);
    console.log(outputFirstWord);

}
solve('tluciffiDsIsihTgnizamAoSsIsihT');
solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');