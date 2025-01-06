function solve(n, k) {
    let arr = [1];

    while (arr.length < n) {
        let currentArr = arr.slice(-k);
        let sum = 0;

        for (const el of currentArr) {
            sum += el;
        }

        arr.push(sum);
    }
    console.log(arr.join(` `));
}
solve(6, 3);
solve(8, 2);