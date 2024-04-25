// // Data types in typecsript

// let character = "luigi"
// let age = 12.8
// let isBlackBelt = false

// const perimeter = (diameter: number) => {
//     return diameter * Math.PI
// };

// console.log(perimeter(14));


// // array
// let names = ["luigi", "luigi", "luigi", "luigi", "mario"];

// names.push('yoshi')

// let letters = ['ken', 9, true, "posit"]

// explicit types
let characters:string;
let ages:number;
let isLoggedIn:boolean;


// arrays
let ninjas: string[] = []// initialize with an empty array
ninjas.push('yoshi');
ninjas.push('mario');
ninjas.push('9');
console.log(ninjas);

// union types
let mixed: (string|number|boolean)[] = [];
mixed = ['yes', 69, false];
console.log(mixed);

let students: string|number|boolean
students = "daniel";
students = 1234
students = true

console.log(students);
 

// objects
let person: object
person = {name: "John", age:12, tall: true};
person = []

console.log(person);

let people: {
    name: string, age: number, tall: boolean
}

people = {name: "John", age:12, tall: true};
console.log(people);

// Dyamanic(any)type

let food: any
 