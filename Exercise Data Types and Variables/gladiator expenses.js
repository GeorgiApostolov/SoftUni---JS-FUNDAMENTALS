function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPrice = 0;
    let totalShieldBreaks = 0;
    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            totalPrice += helmetPrice;
        }
        if (i % 3 === 0) {
            totalPrice += swordPrice;
        }
        if (i % 2 === 0 && i % 3 === 0) {
            totalPrice += shieldPrice;
            totalShieldBreaks++;
        }
        if (totalShieldBreaks % 2 === 0 && totalShieldBreaks > 0) {
            totalPrice += armorPrice;
            totalShieldBreaks = 0;
        }
        
    }
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200    
    );