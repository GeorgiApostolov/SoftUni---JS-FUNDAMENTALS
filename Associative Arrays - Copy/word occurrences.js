function solve(inputArr) {
    let obj = {};
    for (const el of inputArr) {
        if (el in obj) {
            obj[el] += 1;
        }
        else {
            obj[el] = 1;
        }
    }
    let sorted = Object.entries(obj).sort(([aKey,aValue], [bKey, bValue]) => bValue - aValue);
    for (const [word, counter] of sorted) {
        console.log(`${word} -> ${counter} times`);
    }
}
//solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
 solve(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);