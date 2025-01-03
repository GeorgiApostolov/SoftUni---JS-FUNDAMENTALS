function maxSequenceOfEqualElements(inputArr) {
    let sequence = [];
    let currentEl = inputArr[0];
    for (let i = 0; i < inputArr.length; i++) {
        let nextSequence = [];
        let j = i;

        while (currentEl === inputArr[j]) {
            nextSequence.push(currentEl);
            j++;
        }
        if (nextSequence.length > sequence.length) {
            sequence = nextSequence;
        }
        if (currentEl === inputArr[j]) {
          currentEl = inputArr[j+1];
        } else {
            currentEl = inputArr[j];
        }

    }
    console.log(sequence.join(` `));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
//maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3]);
//maxSequenceOfEqualElements([4, 4, 4, 4]);
//maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);