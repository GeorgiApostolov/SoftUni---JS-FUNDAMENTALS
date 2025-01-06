function solve(arr) {
    for (let el of arr) {
        let elArr = String(el).split('');
        let reverseElArr = elArr.reverse();
        let reverseEl = ``;
        for (let digits of reverseElArr) {
            reverseEl += digits;
        }
        reverseEl = Number(reverseEl);
        if (reverseEl === el) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
//solve([123,323,421,121]);
solve([32,2,232,1010]);