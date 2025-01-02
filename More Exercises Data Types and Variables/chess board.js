function chessBoard(n) {
    console.log(`<div class="chessboard">`);
    let strOne = `black`;
    let strTwo = `white`;
    let lastChange = ``;
    let isTrue = true;
    for (let i = 1; i <= n; i++) {
        console.log(` <div>`);
        for (let j = 1; j <= n; j++) {
            if (isTrue === true) {
                console.log(`  <span class="${strOne}"></span>`);
                isTrue = false;
            } else {
                console.log(`  <span class="${strTwo}"></span>`);
                isTrue = true;
            }
            
        }
        isTrue = true;
        console.log(` </div>`);
        lastChange = strOne;
        strOne =  strTwo;
        strTwo = lastChange;
    }
    console.log(`</div>`);
}
chessBoard(5);