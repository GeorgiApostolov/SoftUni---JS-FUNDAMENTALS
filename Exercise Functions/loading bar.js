function solve(num) {
    let loadingBar = ``;
    let numDivided = num / 10;
    for (let i = 0; i < 10; i++) {
        if (i < numDivided) {
            loadingBar += `%`;
        }
        else {
            loadingBar += `.`
        }
    }
    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(`[${loadingBar}]`);
    }
    else {
        console.log(`${num}% [${loadingBar}]`);
        console.log(`Still loading...`);
    }
    
}
solve(30);
solve(50);
solve(100);