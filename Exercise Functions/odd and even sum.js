function solve(num) {
    let odd = 0;
    let even = 0;
    let strNum = String(num).split(``);
    for (let el of strNum) {
        el = Number(el);
        if (el % 2 === 0) {
            even += el;
        }
        else {
            odd += el;
        }
    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);
}
solve(1000435);
solve(3495892137259234);