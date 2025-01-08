function solve(arr) {

    for (const el of arr) {
        let obj = {
            name: el,
            personalNumber: el.length
        };
        
        console.log(`Name: ${obj.name} -- Personal Number: ${obj.personalNumber}`);
    }

}
solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );
// solve([
//     'Samuel Jackson',
//     'Will Smith',
//     'Bruce Willis',
//     'Tom Holland'
//     ]
//     );