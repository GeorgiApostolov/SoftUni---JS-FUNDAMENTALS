function evenAndOddSubtraction(inputArr) {
    let evenSum = 0;
    let oddSum = 0;
    for (const el of inputArr) {
        if (el % 2 === 0) {
            evenSum += Number(el);
        }
        else {
            oddSum += Number(el);
        }
    }
    console.log(evenSum - oddSum);
}
evenAndOddSubtraction([1,2,3,4,5,6]);
evenAndOddSubtraction([3,5,7,9]);
evenAndOddSubtraction([2,4,6,8,10]);