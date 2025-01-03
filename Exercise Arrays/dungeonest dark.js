function dungeonestDark(inputStr) {
    let arr = inputStr.split('|');
    let health = 100;
    let coins = 0;
    let bestRoom = 1;
    let isDone = true;
    for (const cmd of arr) {
        let [item, monsterNum] = cmd.split(' ');
        if (item === `potion`) {
            if (health === 100) {}
            else if(health + +monsterNum > 100) {
                let heal = 100 - health;
                health += heal;
                console.log(`You healed for ${heal} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
            else {
                health += +monsterNum;
                console.log(`You healed for ${monsterNum} hp.`);
                console.log(`Current health: ${health} hp.`);
            }
        }
        else if (item === `chest`) {
            coins += +monsterNum;
            console.log(`You found ${monsterNum} coins.`);
        }
        else {
            if (health - +monsterNum > 0) {
                console.log(`You slayed ${item}.`);
                health -= monsterNum ;
            }
            else {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${bestRoom}`);
                isDone = false;
                break;
            }
        }
        bestRoom++;
    }
    if (isDone === true) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
//dungeonestDark("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeonestDark("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");
