function solve(firstName, lastName, hairColor) {
    let obj = {
        firstName: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let json = JSON.stringify(obj);
    console.log(json);
}
solve('George', 'Jones', 'Brown');
solve('Peter', 'Smith', 'Blond');