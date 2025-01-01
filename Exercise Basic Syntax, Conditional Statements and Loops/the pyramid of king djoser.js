function thePyramidOfKingDjoser(widthLength, incrementHeight) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let step = 0;
    let isTrue = false;
    for (let i = widthLength; i > 0; i -= 2) {
        step ++;
        if (i=== 2 || i === 1) {
            isTrue = true;
            
        }
        let s = i * i  * incrementHeight;
        let p = (4 * i - 4) * incrementHeight;
        if (isTrue === true) {
            gold += i * i * incrementHeight;
            break;
        }
        else if (step % 5 !== 0 && i !== 1) {
            marble += p;
            stone += s - p;
        }
        else if(step % 5 === 0) {
            lapisLazuli += p;
            stone += s - p;
        }
        
    }
    console.log(`Stone required: ${Math.round(stone)}`);
    console.log(`Marble required: ${Math.round(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.round(lapisLazuli)}`);
    console.log(`Gold required: ${Math.round(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(step * incrementHeight)}`);
}
thePyramidOfKingDjoser(23,
    0.5
    )