// // console.log("Your code goes here");
// // console.log("will it work again");

// function add(n1: number, n2: number, showResult: boolean, phrase: string){

//     const result = n1 + n2
//     if (showResult) {
//         console.log(phrase + result);
        
//     }
//     return n1 + n2
// }

// const number1 = 5;
// const number2 = 7.8;
// const printResult = true;
// const resultPhrase = "Result is: ";


// add(number1, number2, printResult, resultPhrase);

// let myList: [boolean, string, number];

// myList = [true, "its not working", 7.99]
// myList.push("will it work")
// myList.unshift("will this also work")

// console.log(myList);

// // define our readonly tuple
// let myBooks: readonly [string, number, boolean];

// myBooks = ["God of Fury", 4.9, true]
// console.log(myBooks);


// // Named tuples - allows us to provide context for our values at each other. 

// let coordinates: [lat: number, lon: number] = [38.8951, -77.0364];
// console.log(coordinates);

// let graph: [number, number] = [69.9, 102];
// let [x, y] = graph;

// console.log(graph);


// // onjects

// let car: {
//     type: string,
//     model: string,
//     year: number,
// } = {
//     type: "mercedes",
//     model: "suv",
//     year: 2000
// }

// console.log(car);

// // type Inference - ts can infer the types of properties based on their values.

// const car1 = {
//     type1: "Toyota",
//     model: "suv"
//   };
//   car1.type1 = "Ford"; // no error
//   car1.model = 2; // Error: Type 'number' is not assignable to type 'string'.


//  console.log(car1);
  
// // optional properties - they are properties that don't have to be defined in the object definition

// const car2: { type2: string, mileage: number } = {
//     type2: "Toyota",
//   };
//   car2.mileage = 2000;

//   console.log(car2);

//   const car3: { type3: string, mileage1?: number } = {
//     type3: "Toyota",
//   };
//   car3.mileage1 = 99000;

//   console.log(car3);
  
// //  Index Signatures - can be used for objects without a defined list of properties

// const nameAgeMap: { [index: string]: number } = {};
// nameAgeMap.Jack = 25; // no error
// nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

// console.log(nameAgeMap);

// Enums - a special class that represents a group of constants(unchangeable variables).

// enum cardinalDirections {
//   North,
//   East,
//   West,
//   South
// };

// console.log(cardinalDirections);

// let currentDirection = cardinalDirections.East
// console.log(currentDirection);

// When we set the value of the first numeric enum and have it auto increment from that 

// enum cardinalDirections {
//   North = 4,
//   East,
//   West,
//   South
// };

// console.log(cardinalDirections.North); // logs 4
// console.log(cardinalDirections.East);  // logs 5
// console.log(cardinalDirections.West);  // logs 6
// console.log(cardinalDirections.South);  // logs 7

// numeric enums - fully initialized, when you assign a unique number values for each enum value

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 201,
  BadRequest = 400,
}

console.log(StatusCodes.NotFound); // logs 404
console.log(StatusCodes.Success); // logs 200
console.log(StatusCodes.Accepted); // logs 201
console.log(StatusCodes.BadRequest); // logs 400


// string enums

enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);


// Type Aliases and Interfaces - allow types to be easily shared between different variables/objects
// ts allows type to be defined separately from the variables that use them 

// Type Aliases allow defining types with a custom name(an Alias) = can be used in like strings or objects and arrays

type CarYear = number
type CarType = string
type CarModel = string
type Car = {
  year: CarYear,
  type: CarType
  model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
  year: carYear,
  type: carType,
  model: carModel
}

console.log(car);

// Interfaces are similar to aliases except they only apply o objects

interface Square {
  height: number,
  width: number
}

const square: Square = {
  height: 200,
  width: 200
}

console.log(square);

// extending interface - extending an interface means creating a new interface with the same properties as the origanl plus something new

interface ColoredSquare extends Square {
  color: string
}

const coloredSquare: ColoredSquare = {
  height: 200,
  width: 123,
  color: "yellow"
}

console.log(coloredSquare);

// Union Types - used when a value can be more than a single type - such when a property would be a string or number
// Union | (or) - using the | means a parameter is a string or number

function statusCodes (code: string | number) {
  console.log(`My status code: ${code}.`);
}

statusCodes(404)
statusCodes("four zero four")

function combine(input1: number | string, input2: number | string){
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toLocaleString();
  }
  return result;
}

const combinedAges = combine(30, 12)
console.log(combinedAges);

const combinedNames = combine("Max", "Anna")
console.log(combinedAges);

// In Type aliases we can use type union 
// type combine = number | string