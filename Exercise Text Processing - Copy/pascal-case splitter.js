function solve(input) {
    const words = input.match(/[A-Z][a-z]*/g);
    
    console.log(words ? words.join(', ') : '');
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');
solve('HoldTheDoor');
solve('ThisIsSoAnnoyingToDo');