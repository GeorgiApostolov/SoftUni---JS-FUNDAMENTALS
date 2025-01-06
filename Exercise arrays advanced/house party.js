function solve(arr) {
    let nameArr = [];
    for (const el of arr) {
        let cmd = el.split(` `);
        let name = cmd.shift();
        if (cmd[1] !== `not`) {
            if (nameArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
            else {
                nameArr.push(name);
            }
        }
        else {
            if (!nameArr.includes(name)) {
                console.log(`${name} is not in the list!`);
            }
            else {
                let index = nameArr.indexOf(name);
                nameArr.splice(index,1);
            }
        }
        
    }
    for (const el of nameArr) {
        console.log(el);
    }
}
// solve(['Allie is going!',
//     'George is going!',
//     'John is not going!',
//     'George is not going!']
//     );
solve(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']
    );