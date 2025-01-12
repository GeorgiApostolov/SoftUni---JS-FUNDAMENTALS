function solve(inputArr) {
    let obj = {};
    for (const el of inputArr) {
        let splitEl = el.split(`: `);
        let name = splitEl.shift();
        let cards = splitEl[0].split(`, `);

        if (name in obj) {
            let valueArr = obj[name];
            for (const card of cards) {
                if (valueArr.includes(card)) {
                    
                }
                else {
                    valueArr.push(card)
                }
            }
        }
        else {
            obj[name] = [...new Set(cards)];
        }
    }

    for (const key in obj) {
       let value = obj[key];
       let sum = 0;

       for (const el of value) {
            let split = el.split(``);
            let P = split[0];
            let T = split[1];
            if (T === `0`) {
                T = split[2];
                P = 10;
            }
            if (P === `J`) {
                P = 11;
            }
            else if (P === `Q`) {
                P = 12;
            }
            else if (P === `K`) {
                P = 13;
            }
            else if (P === `A`) {
                P = 14;
            }
            P = Number(P);
            if (T === `S`) {
                T = 4;
            }
            else if(T === `H`) {
                T = 3;
            }
            else if(T === `D`) {
                T = 2;
            }
            else if(T === `C`) {
                T = 1;
            }
            T = Number(T);
            sum += P * T;
       }
       obj[key] = sum;
    }

    for (const key in obj) {
        let value = obj[key];
        console.log(`${key}: ${value}`);
    }
    
}
solve([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ]
    );
// solve([
//     'John: 2C, 4H, 9H, AS, QS',
//     'Slav: 3H, 10S, JC, KD, 5S, 10S',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Slav: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'Alex: 6H, 7S, KC, KD, 5S, 10C',
//     'Thomas: QH, QC, JS, JD, JC',
//     'John: JD, JD, JD, JD'
//     ]
//     );