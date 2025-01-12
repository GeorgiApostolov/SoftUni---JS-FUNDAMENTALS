function solve(inputArr) {
    let obj = {}
    for (const el of inputArr) {
        let [name, phoneNumber] = el.split(` `);
        obj[name] = phoneNumber;
        
    }
    
    for (const key in obj) {
        let value = obj[key];
        console.log(`${key} -> ${value}`);
    }
}
solve(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
   );
solve(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
   );