function charactersInRange(char1, char2) {
    let start = char1.charCodeAt(0);
    let end = char2.charCodeAt(0);

    let output = ``;
    if (start < end) {
        for (let i = start + 1; i < end; i++) {
            output += String.fromCharCode(i) + ` `;
        }
    } else {
        for (let i = end + 1; i < start; i++) {
            output += String.fromCharCode(i) + ` `;
        }
    }

    console.log(output);
}

charactersInRange('C',
    '#'
);