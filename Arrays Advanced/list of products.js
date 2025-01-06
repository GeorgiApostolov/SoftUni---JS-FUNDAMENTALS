function solve(inputArr) {
    let sortedArr = inputArr.sort();
    let num = 1;
    for (const el of sortedArr) {
        console.log(`${num}.${el}`);
        num++;
    }
}
solve(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
solve(['Watermelon', 'Banana', 'Apples']);