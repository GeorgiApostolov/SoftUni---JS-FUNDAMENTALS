function theatreProm(day, years) {
    let price = 0;
    if (day === `Weekday`) {
        if (years >= 0 && years <= 18) {
            price = 12;
        }
        else if(years > 18 && years <= 64) {
            price = 18;
        }
        else if (years > 64 && years <= 122) {
            price = 12;
        }
    }
    else if (day === `Weekend`) {
        if (years >= 0 && years <= 18) {
            price = 15;
        }
        else if(years > 18 && years <= 64) {
            price = 20;
        }
        else if (years > 64 && years <= 122) {
            price = 15;
        }
    }
    else if (day === `Holiday`) {
        if (years >= 0 && years <= 18) {
            price = 5;
        }
        else if(years > 18 && years <= 64) {
            price = 12;
        }
        else if (years > 64 && years <= 122) {
            price = 10;
        }
    }
    function print(price) {
        if (price) {
            console.log(`${price}$`);
        }
        else {
            console.log(`Error!`);
        }
    }
    print(price)
}
theatreProm(`Weekday`, 42);