function solve(arr) {
    let money = 0
    let day = 1
    let boughtBitcoin = 0 ;
    let dayOfBoguthBitcoin = 0;
    for (let i = 0; i < arr.length; i++) {
        
        if (day % 3 === 0) {
            arr[i] *= 0.70;
            money += arr[i]*67.51;
            day++;
        }
        else{
            money += arr[i]*67.51;
            day++
        }
       while (money >= 11949.16) {
        money -= 11949.16;
        boughtBitcoin ++;
        if (boughtBitcoin === 1) {
            dayOfBoguthBitcoin = day - 1;
        }
       }
        
    }
    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if (dayOfBoguthBitcoin > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfBoguthBitcoin}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);
}
//solve([100, 200, 300]);
//solve([50, 100]);
solve([3124.15, 504.212, 2511.124]);