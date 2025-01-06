function repeatString(str, count) {
    function repeat(str, count) {
        let output = ``;
        for (let i = 0; i < count; i++) {
            output += str;
        }
        print(output);
    }
    function print(output) {
        console.log(output);
    }
    repeat(str, count);
}
repeatString("abc", 3);
repeatString("String", 2);