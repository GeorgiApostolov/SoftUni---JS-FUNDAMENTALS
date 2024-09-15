function solve(day, age) {
    let price = 0
    if (day === `Weekday` && age >= 0 && age <= 18 ) {
        price = 12;
        console.log(price + `$`);
    } else if (day === `Weekend` && age >= 0 && age <= 18 ) {
        price = 15;
        console.log(price + `$`);
    } else if (day === `Holiday` && age >= 0 && age <= 18 ) {
        price = 5;
        console.log(price + `$`);
    } else if (day === `Weekday` && age > 18 && age <= 64 ) {
        price = 18;
        console.log(price + `$`);
    } else if (day === `Weekend` && age > 18 && age <= 64 ) {
        price = 20;
        console.log(price + `$`);
    } else if (day === `Holiday` && age > 18 && age <= 64 ) {
        price = 12;
        console.log(price + `$`);
    } else if (day === `Weekday` && age > 64 && age <= 122 ) {
        price = 12;
        console.log(price + `$`);
    } else if (day === `Weekend` && age > 64 && age <= 122 ) {
        price = 15;
        console.log(price + `$`);
    } else if (day === `Holiday` && age > 64 && age <= 122 ) {
        price = 10;
        console.log(price + `$`);
    } 
    else {
        console.log(`Error!`);
    }
}
solve(`Weekday`, 42)
solve(`Holiday`, -12)
solve(`Holiday`, 15)