function arrayRotation(inputArr, rotation){
    for (let i = 0; i < rotation; i++) {
        let currentEl = inputArr.shift();
        inputArr.push(currentEl);

    }
    console.log(inputArr.join(` `));
}
arrayRotation([51, 47, 32, 61, 21], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5);