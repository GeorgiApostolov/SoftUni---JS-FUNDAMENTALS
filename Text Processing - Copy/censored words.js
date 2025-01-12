function solve(str, word) {
    let count = word.length;
    let outputWord = `*`.repeat(count);
    let output = str.replace(word, outputWord);
    console.log(output);
}
solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');