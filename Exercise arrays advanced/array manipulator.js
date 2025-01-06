function solve(firstArr, cmdArr) {
    for (const el of cmdArr) {
        let cmd = el.split(` `);
        let command = cmd.shift();

        if (command === `add`) {
            let index = cmd[0];
            let element = +cmd[1];

            firstArr.splice(index,0,element);
        }
        else if (command === `addMany`) {
            let index = cmd.shift();
            let reverseArr = [];
            for (let i = cmd.length-1; i >= 0; i--) {
                reverseArr.push(cmd[i]);
            }
            for (let reverseEl of reverseArr) {
                reverseEl = +reverseEl;
                firstArr.splice(index,0,reverseEl);
            }
        }
        else if (command === `contains`) {
            let element = +cmd[0];
            findEl = firstArr.indexOf(element);
            console.log(findEl);
        }
        else if (command === `remove`) {
            let index = cmd[0];
            
            firstArr.splice(index, 1);
        }
        else if (command === `shift`) {
            let positions = cmd[0];

            for (let i = 0; i < positions; i++){
                let shiftNum = firstArr.shift();
                firstArr.push(shiftNum);
            }
        }
        else if(command === `sumPairs`) {
            let copyArr = [];
            let secondNum = 0;
            while (firstArr.length >= 1) {
                let firstNum = firstArr.shift();
                if (firstArr.length >= 1) {
                    secondNum = firstArr.shift();
                }
                else {
                    secondNum = 0;
                }
                
                let sum = firstNum + secondNum
                copyArr.push(sum);
            }
            for (let i = 0; i < copyArr.length; i++) {
                firstArr.push(copyArr[i]);
            }
        }
        else if (command === `print`) {
            console.log(firstArr);
            break;
        }
    }
}
solve([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']);
//solve([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']);