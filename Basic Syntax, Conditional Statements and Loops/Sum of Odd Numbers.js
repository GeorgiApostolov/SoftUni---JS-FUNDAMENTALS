function solve(n) {
    let odd = 1;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        console.log(odd);
        sum+=odd;
        odd+=2;
        
        
    }
    console.log(`Sum: ${sum}`);
}
solve(5)
solve(3)