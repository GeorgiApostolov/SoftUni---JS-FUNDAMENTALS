function solve(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age,
    }
    for (const key in person) {
        let value = person[key];
        console.log(`${key}: ${value}`);
    }
}
solve("Peter", 
"Pan",
"20"
);
// solve("George", 
// "Smith",
// "18"
// );