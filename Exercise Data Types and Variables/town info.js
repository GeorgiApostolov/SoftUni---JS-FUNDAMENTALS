function townInfo(townName, population, area) {
    if (townName.length < 3 || population < 0 || area < 0) {
        if (townName.length < 3) {
            console.log(`Town name must be at least 3 characters!`);  //ako ima greshka da promenq da e po malko ot 3 a ne i ravno
            
        }
        if (population < 0) {
            console.log(`Population must be a positive number!`);
            
        }
        if (area < 0) {
            console.log(`Area must be a positive number!`);
            
        }
    }
    else {
        console.log(`Town ${townName} has population of ${population} and area ${area} square km.`);
    }
    
    
}
townInfo('Ka',
3600,
-50
);