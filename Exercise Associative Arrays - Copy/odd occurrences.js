function solve(str) {
    const map = new Map();
    str = str.toLowerCase();
    let strArr = str.split(` `);

    for (const el of strArr) {
        if (map.has(el)) {
            let counter = map.get(el)+1;
            map.set(el, counter);
        }
        else {
            map.set(el, 1);
        }
    }
    let outputStr = ``;
    
    for (const [key, value] of map) {
        if (value % 2 !== 0) {
            outputStr += key + ` `;
        }
    }
    console.log(outputStr);
    
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');