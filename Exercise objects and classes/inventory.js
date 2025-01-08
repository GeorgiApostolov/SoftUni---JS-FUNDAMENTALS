function solve(inputArr) {
    let outputArr = [];

    for (const el of inputArr) {
        let [heroName, heroLevel, items] = el.split(` / `);
        heroLevel = Number(heroLevel);
        let obj = {
            Hero: heroName,
            level: heroLevel,
        }
        if (items) {
            obj.items = items;
        }
        outputArr.push(obj);
    }
    let sortedHero = outputArr.sort((a,b) => a.level - b.level);
    for (const hero of sortedHero) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);   
    }
}
solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
    );
// solve([
//     'Batman / 2 / Banana, Gun',
//     'Superman / 18 / Sword',
//     'Poppy / 28 / Sentinel, Antara'
//     ]
//     );