function solve(arr) {
    let output = [];
    for (let el of arr) {
        el = Number(el);
        if (el < 0) {
            output.unshift(el);
        }
        else {
            output.push(el);
        }
    }
    for (const el of output) {
        console.log(el);
    }
    
}
solve(['7', '-2', '8', '9']);
solve(['3', '-2', '0', '-1']);