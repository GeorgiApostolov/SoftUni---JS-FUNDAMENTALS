function ladybugs(inputArr) {
    let fieldSize = inputArr.shift();
    let initialIndexes = inputArr.shift();
    let field = Array(fieldSize).fill(0);

    let ladybugsIndexes = initialIndexes.split(' ').map(Number);
    for (let index of ladybugsIndexes) {
        if (index >= 0 && index < fieldSize) {
            field[index] = 1;
        }
    }

    for (const command of inputArr) {
        let [startIndex, direction, flyLength] = command.split(' ');
        startIndex = Number(startIndex);
        flyLength = Number(flyLength);

        if (startIndex < 0 || startIndex >= fieldSize || field[startIndex] !== 1) {
            continue;
        }

        field[startIndex] = 0;

        while (true) {
            startIndex = direction === "right"
                ? startIndex + flyLength
                : startIndex - flyLength;

            if (startIndex < 0 || startIndex >= fieldSize) {
                break;
            }

            if (field[startIndex] === 0) {
                field[startIndex] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}

ladybugs([ 3, '0 1', '0 right 1', '2 right 1' ]);
ladybugs([ 3, '0 1 2', '0 right 1', '1 right 1', '2 right 1']);
//ladybugs([ 5, '3', '3 left 2', '1 left -2']);