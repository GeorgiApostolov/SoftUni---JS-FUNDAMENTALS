function solve(inputArr) {
    let inventory = inputArr.shift().split(` `);

    for (const el of inputArr) {
        let [cmd, equipment] = el.split(` `);

        if (cmd === `Buy`) {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }
        }
        else if(cmd === `Trash`) {
                while (inventory.includes(equipment)) {
                    let index = inventory.indexOf(equipment);

                    inventory.splice(index,1);
                }
        }
        else if(cmd === `Repair`) {
            if (inventory.includes(equipment)) {
                let index = inventory.indexOf(equipment);

                inventory.splice(index, 1);
                inventory.push(equipment);
            }
        }
        else if(cmd === `Upgrade`) {
            let [eq, upgrade] = equipment.split(`-`);
            if (inventory.includes(eq)) {
                let str = eq+`:`+upgrade;
                let index = inventory.indexOf(eq);

                inventory.splice(index+1, 0, str);
            }
        }
    }
    console.log(inventory.join(` `));
}

solve(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']);
solve(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V']);