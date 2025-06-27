// higher order functions

/* 
    arrays are also customer objects in javascript. 
*/

/* 
    map function : is a higher order function avaiable with arrays
    - it takes an array and a function as arguments
    - it areturn an array in which every value is actually populated by calling
    - function f with original array element as argument
    - every element of the origanl array is passed one by one in the argument funciton f
    - whatever is the output for each invidual element, we populate that output in an array
    - map internally iternatess/loops over every elemnt of the given original array pass the element in the
    argument function f and then store the returned value inside an array.
*/


function square(el){
    return el * el;
}

function cube(x){
    return x * x * x;
}

function isEvenOrOdd(el){
    if(el % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}

const arr = [1, 2, 3, 4, 5]; // orignal array

const result = arr.map(square); // square is funciton passed as an argument
console.log(result); // [1, 4, 9, 16, 25] 

const cubeResult = arr.map(cube); // cube is funciton passed as an argument
console.log(cubeResult); // [1, 8, 27, 64, 125]

const evenOrOddResult = arr.map(isEvenOrOdd);
console.log(evenOrOddResult); // ["Odd", "Even", "Odd", "Even", "Odd"]
