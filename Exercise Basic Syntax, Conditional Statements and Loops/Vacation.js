function vacation(countPeople, typeGroup, day) {
    let price = 0;
    let totalprice = 0;
    if (typeGroup === `Students` && day === `Friday`) {
        price = 8.45;
    }
    else if(typeGroup === `Students` && day === `Saturday`) {
        price = 9.80;
    }
    else if(typeGroup === `Students` && day === `Sunday`) {
        price = 10.46;
    } else if (typeGroup === `Business` && day === `Friday`) {
        price = 10.90;
    }
    else if(typeGroup === `Business` && day === `Saturday`) {
        price = 15.60;
    }
    else if(typeGroup === `Business` && day === `Sunday`) {
        price = 16;
    }
    else if (typeGroup === `Regular` && day === `Friday`) {
        price = 15;
    }
    else if(typeGroup === `Regular` && day === `Saturday`) {
        price = 20;
    }
    else if(typeGroup === `Regular` && day === `Sunday`) {
        price = 22.50;
    }
    totalprice = price * countPeople;

    if (typeGroup === `Students` && countPeople >= 30) {
        let discount = totalprice * 0.15;
        totalprice -= discount
    }
    if (typeGroup === `Business` && countPeople >= 100 ) {
        totalprice -=10*price
    }
    if (typeGroup === `Regular` && countPeople >= 10 && countPeople <= 20) {
        let discount = totalprice * 0.05;
        totalprice -= discount;
    }
    console.log(`Total price: ${totalprice.toFixed(2)}`);
}
vacation(40,
    "Regular",
    "Saturday"
    
    );