/*
    ? Array Methods

    * What on Earth is a method?
    * function ... exists on a specific object prototype
    * tl;dr function specific to your object type (in this case, array)
*/

let arrayFromConstructorObject = new Array
console.log(arrayFromConstructorObject);

/*
    ? Basic array methods
    * .push() - adds item and returns length
    * .pop() - removes last item an returns said item
    * .unshift() - adds to front & returns length
    * .shift() - removes from front and returns said items
*/

let carBrands = ["BMW", "Porsche", "Mercedes", "Audi", "Pagani", "Lamborghini"]

let returnOfPush = carBrands.push("Mazda")
console.log(returnOfPush);

let returnOfPop = carBrands.pop()
console.log(carBrands, returnOfPop);

let returnOfUnshift = carBrands.unshift("Honda", "Saab")
console.log(returnOfUnshift, carBrands);

let returnOfShift = carBrands.shift()
console.log(returnOfShift, carBrands)

// findIndex action

carBrands.findIndex((val, index) => {
    if (val === "Porsche") {
        console.log(index)
    }
})

/*
    ? Advanced Array Methods
    * forEach()
        * fires a callback on all items in array
    * map()
        * same as forEach but returns
    * filter()
        * builds new arrau based on filter predicate
        * can only take an if expression! (no else)
    * advanced array methods' most common parameters
        * value - at any given time during the iteration
        * index - 
        * array
*/

let planets = ["Earth", "Venus", "Mars", "Jupiter", "Uranus", "Mercury", "Neptune", "Pluto"]

/* 
    ? What is a callback?
    * it's a function that is passed inside of another function
    * it fires whenever preceeding function predicate is satisfied
*/

planets.forEach((value, index, origArr) => {
    console.log(value.toUpperCase())
})

// useful as a single-liner loop to perform work on your data set

let upperCasePlanets = planets.map(value => value.toUpperCase())
console.log(upperCasePlanets)

let longerWordedPlanets = planets.filter((val) => val.length > 5)
console.log(longerWordedPlanets)