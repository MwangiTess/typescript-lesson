"use strict";
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
let characters;
let ages;
let isLoggedIn;
// arrays
let ninjas = []; // initialize with an empty array
ninjas.push('yoshi');
ninjas.push('mario');
ninjas.push('9');
console.log(ninjas);
// union types
let mixed = [];
mixed = ['yes', 69, false];
console.log(mixed);
let students;
students = "daniel";
students = 1234;
students = true;
console.log(students);
// objects
let person;
person = { name: "John", age: 12, tall: true };
person = [];
console.log(person);
let people;
people = { name: "John", age: 12, tall: true };
console.log(people);
// Dyamanic(any)type
let food;
