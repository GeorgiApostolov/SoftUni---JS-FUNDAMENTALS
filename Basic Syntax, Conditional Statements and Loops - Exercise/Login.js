function solve(input) {
    let username = input[0];
    let password = username.split(``).reverse().join(``);
    let currentPassword = ``;
    for (let i = 1; i <= input.length; i++){
        currentPassword = input[i];
        if (password === currentPassword) {
            console.log(`User ${username} logged in.`)
            break;
        }
        else{
            if (i === 4) {
                console.log(`User ${username} blocked!`);
                break;
            }else {
                console.log(`Incorrect password. Try again.`);
            }
            
        }
    }
}
solve(['sunny','rainy','cloudy','sunny','not sunny'])