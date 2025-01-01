function solve(str1, str2, str3) {
    let reverse = str3+str2+str1;
    let arr = [];
    arr.push(str3.charCodeAt(0));
    arr.push(str2.charCodeAt(0));
    arr.push(str1.charCodeAt(0));
    console.log(reverse);
    console.log(arr.join(` `));
}
solve('a',
'b',
'c'
);