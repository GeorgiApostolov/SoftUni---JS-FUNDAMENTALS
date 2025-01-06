function solve(inputArr) {
    let arr = inputArr.shift().split(` `);
    arr = arr.map(Number);
    for (const el of inputArr) {
        let [cmd, num, insertIndex] = el.split(` `);

        if (cmd === `Add`) {
            arr.push(num);
        }
        else if(cmd === `Remove`) {
            num = Number(num);
            while (arr.includes(num)) {
                let index = arr.indexOf(num);
                arr.splice(index,1);
            }
        }
        else if(cmd === `RemoveAt`) {
            arr.splice(num,1);
        }
        else if(cmd === `Insert`) {
            arr.splice(insertIndex, 0, num);
        }
    }

    console.log(arr.join(` `));

}
// solve(['4 19 2 53 6 43',
//     'Add 3',
//     'Remove 2',
//     'RemoveAt 1',
//     'Insert 8 3']
//     );
solve(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2']
    );