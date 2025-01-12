function solve(inputArr) {
    let obj = {};
    let isOut = false;
    let count = 1;
    for (const el of inputArr) {
        let elArr = el.split(``);
        let firstDigit = elArr.shift();
        firstDigit = Number(firstDigit);
        if (el === `PARTY`) {
            isOut = true;
        }
         if (isOut === false) {
            if (firstDigit >= 0) {
                obj[el] = `vip`;
                count++;
            }
            else {
                obj[el] = `in`;
                count++;
            }
            

        }
        else if(isOut === true) {
            delete obj[el];
            count--;
        }
    }
    let objToArr = Object.entries(obj);
    let output = [];
    for (const [key, value] of objToArr) {
        if (value === `vip`) {
            output.unshift(key);
        }
        else {
            output.push(key);
        }
    }
    console.log(count);
    for (const el of output) {
        console.log(el);
    }
}
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
    ]
    );
solve(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
    ]
    );