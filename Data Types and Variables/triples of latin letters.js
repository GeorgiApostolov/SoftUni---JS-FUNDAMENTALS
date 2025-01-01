function triplesOfLatinLetters(strNum) {
    strNum = Number(strNum);
    let word = ``;
    for (let i = 0; i < strNum; i++) {
        for (let j = 0; j < strNum; j++) {
            for (let k = 0; k < strNum; k++) {
                let letter = String.fromCharCode(97+i);
                let letter2 = String.fromCharCode(97+j);
                let letter3 = String.fromCharCode(97+k);
                console.log(`${letter}${letter2}${letter3}`);
            }   
        }
    }
}
triplesOfLatinLetters(`3`);