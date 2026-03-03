/* 
    ? Arrays
    * collection of multiple items
    * like a list, or a collection
    * we use [ ] to define it
    * data type agnostic - you can throw any data type into it, mix & match
    * indexable
*/  

let myFirstArray = [] // creates an empty array

console.log(myFirstArray);
console.log(myFirstArray.length);

let visitedCountries = ["El Salvador", "Spain", "Germany", "Cayman Islands", "Guatemala"]

// array can be acessed using index, just like strings

console.log(visitedCountries[0]);

// what would happen if I accessed something out of bounds?

console.log(visitedCountries[9]);

// you would get an undefined

// ? How do we add more data into an array?

visitedCountries[visitedCountries.length] = "Random"

console.log(visitedCountries);

visitedCountries[1] = "Mexico"

console.log(visitedCountries);

/*
    ? Challenge
    * create function
    * it will take two parameters called, arr and search
    * iterate through the array
    * check if the item from the search param is found in the array
    * return true if found false if not
*/

function findItem(arr, search) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return true
        }
    }
    return false
}

console.log(findItem(visitedCountries, "Mexico"));

// ? Arrays with many different data types

let junkDrawerArray = [
    "whats up",
    67,
    ["dog", "cat", "giraffe"],
    null,
    false,
    "potato"
]

console.log(junkDrawerArray);

// How to get the cat out of the array

console.log(junkDrawerArray[2][1]);

/*
    ? Challenge
    * create a function called findIndex
    * it will take an array and search param
    * iterate over an array
    * if found, return the index where found item is
*/

function findIndex(arr, search) {
    let result = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            result[0] = i
            result[1] = arr[i]
        }
    }
    return result
}

console.log(findIndex(visitedCountries, "El Salvador"))