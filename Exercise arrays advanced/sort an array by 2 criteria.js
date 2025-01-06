function solve(strArr) {
    let sortArr = strArr.sort((a,b) => {
        if (a.length - b.length){
            return a.length - b.length;    
        } 

        return a.toLowerCase().localeCompare(b.toLowerCase());
        
    });
    console.log(sortArr);
}
solve(['alpha', 'beta', 'gamma']);
solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);