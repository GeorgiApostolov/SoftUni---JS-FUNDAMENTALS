function solve(inputArr) {
    let wordsForFind = inputArr.shift().split(` `);
    let obj = {};

    for (const el of wordsForFind) {
        obj[el] = 0;
    }

    for (const el of inputArr) {
        if (el in obj) {
            obj[el] += 1;
        }
    }
    let sorted = Object.entries(obj).sort(([aKey, aValue], [bKey, bValue]) =>  bValue - aValue);
    for (const [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }
}
solve([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    );
solve([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );