function solve(inputArr) {
    let obj = {};

    for (const el of inputArr) {
        let [day, name] = el.split(` `);

        if (day in obj) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            obj[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    for (const key in obj) {
        let value = obj[key];

        console.log(`${key} -> ${value}`);
    }
}
solve(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
   );
// solve(['Friday Bob',
//     'Saturday Ted',
//     'Monday Bill',
//     'Monday John',
//     'Wednesday George']
//     );