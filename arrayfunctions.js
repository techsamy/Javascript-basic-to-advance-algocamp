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


/* 
* when to use maps ?
* In any situation when we have to do an operqation on every element of an array
* and store the result of each operation
* map can be a good option
*

* for example: 
* Array of product objects.
 */

const newArr = [9,8,7,6,5];

/* 
    * if the funciton that we are passing to map takes two arguments
    * then first argument will be accessign the actual value
    * second argument will be accessing the index of that value
*/
function print(element, idx){
    return `Element: index ${idx}, is ${element}`;
}


/* 
* Here map is looping over every element of the array 
* and then pasing element, index in the function print
*/

const result2 = newArr.map(print);
console.log(result2); 


function customeMapper(arr, func){
    let result = [];
    for(let i = 0; i < arr.length; i++){
        result.push(func(arr[i], i)); // calling the function func with element and index
    }
    return result;
}

const value = customeMapper(newArr, print);
console.log(value); 