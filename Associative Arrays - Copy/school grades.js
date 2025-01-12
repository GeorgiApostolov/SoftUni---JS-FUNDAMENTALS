function solve(inputArr) {
    let obj = {};

    for (const el of inputArr) {
        let grades = el.split(` `);
        let name = grades.shift();
        if (name in obj) {
            for (const grade of grades) {
                obj[name].push(grade);
            }
            
        }
        else {
            obj[name] = grades;
        }
        
    }
    for (const key in obj) {
        let value = obj[key];
        let sum = 0;
        let count = value.length;

        for (let el of value) {
            el = Number(el);
            sum += el;
        }
        obj[key] = (sum / count).toFixed(2);
    }
    let sorted = Object.entries(obj).sort(([aKey, aValue], [bKey, bValue]) => aKey.localeCompare(bKey));
    for (const [name,averageGrade] of sorted) {
        console.log(`${name}: ${averageGrade}`);
    }
}
solve(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
    );
solve(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3']
    );