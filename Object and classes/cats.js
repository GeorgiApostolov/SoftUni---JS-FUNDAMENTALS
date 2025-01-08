function solve(arr) {
    
    class Cat {
        constructor(catName, catAge) {
            this.catName = catName;
            this.catAge = catAge;
        }

        meow() {
            console.log(`${this.catName}, age ${this.catAge} says Meow`);
        }
    }


    for (let el of arr) {
        let [name, age] = el.split(` `);

        let newCat = new Cat(name, age);

        newCat.meow();
    }

}
solve(['Mellow 2', 'Tom 5']);
solve(['Candy 1', 'Poppy 3', 'Nyx 2']);