function commonElements(firstArr, secondArr) {
    let matchArr = [];
    for (const el of firstArr) {
        if (secondArr.includes(el)) {
            matchArr.push(el);
        }
    }
    for (const matchArrElement of matchArr) {
        console.log(matchArrElement);
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
    ['Petar', 10, 'hey', 4, 'hello', '2']
);
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
);