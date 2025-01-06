function solve(grade) {
    function format(grade) {
        if (grade >= 5.50) {
            print(`Excellent`, grade);
        }
        else if(grade >= 4.50) {
            print(`Very good`, grade);
        }
        else if(grade >= 3.50) {
            print(`Good`, grade);
        }
        else if(grade >= 3.00) {
            print(`Poor`, grade);
        }
        else if(grade < 3.00) {
            print(`Fail`,grade);
        }
    }
    function print(text, grade) {
        if (text === `Fail`) {
            console.log(`${text} (2)`);
        }
        else {
            console.log(`${text} (${grade.toFixed(2)})`);
        }
    }
    format(grade);
}
solve(2.99)