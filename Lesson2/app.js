"use strict";
// // Typescript Functions - has a specific syntax for typing function parameters and return values
// // Return Type - the type of the value returned by the function can be explicitly defined.
// function getTime(): number {
//     return new Date().getTime();
// }
// console.log(getTime());
// // Void return type - used to show a function doesn't return any value
// // mostly used whenn you dont have a return statement
// function printHello(): void {
//     console.log("Hello!1");
// }
// printHello();
// function sayHello(): string {
//     return "Hello!2";
// }
// console.log(sayHello());
// // parameters
// function multiply (x: number, y: number) {
//     return x * y;
// }
// const number1 = 10;
// const number2 = 13;
// console.log(multiply(number1, number2));
// // Optional parameters - ts assumes all perimeters are required, but they can be explicitly marked as optional
// // the "?" operator marks a parameter as optional
// function add(a: number, b: number, c?: number){
//     return a + b + (c || 0)
// }
// const number3 = 10;
// const number4 = 11;
// const number5 = 69
// console.log(add(number3, number4));
// console.log(add(number3, number4, number5));
// // Function default parameters - the default value goes after the type annotation
// function pow(value: number, exponent: number = 10) {
//     return value ** exponent;
//   }
// console.log(pow(2));
// // function types - types that describes a function regarding the parameters and the return value of that function
// let combineValues: (a: number, b: number, c?: number) => number
// combineValues = add
// // combineValues = multiply
// console.log(combineValues(8, 10));
// console.log(combineValues(8, 10, 12));
// // rest parameters - can be typed like normal parameters, but the type must be an array as rest parameters are always arrays
// function adds(a: number, b: number, ...rest: number[]) {
//     return a + b + rest.reduce((x, y ) => x + y, 0);
//     //  rest.reduce((x, y ) => x + y, 0); a call back function that adds each element ('y) to an accumulator('x'), starting with an initial value of '0'
// }
// console.log(adds(5, 10, 12, 9, 15, 7, 11));
// Casting - process of overiding a type
// casting with (as) - directly changes the type of the given variable
let x = "hello";
console.log(x.length);
// Classes - The members of a class (properties & methods) are typed using type annotations, similar to variables.
// class Person {
//     name: string;
//     age: number;
// }
//  const person = new Person(); // creates a new instance of Person
//  person.name = "John";
//  person.age = 13
// members: visibility - class members also can be given special modifiers which affect visibility
// visibility modifiers - public, private, or protected
// public - default visibility, allows access to the class member from anywhere
// private - default visibility, allows access to the class member within the class
// protected - default visibility, allows access to the class member from itself and any classes that inherit itself and any classes that inherit it.
class Song {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
const song = new Song("mulla");
console.log(song.getName()); // song.name isn't accessible from outside the class since it's private
class Persons {
    constructor(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    getNames() {
        return this.name;
    }
}
const persons = new Persons("Jane");
console.log(persons.getNames());
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
const myRect = new Rectangle(23, 3);
console.log(myRect.getArea());
class Rectangles {
    constructor(widths, heights) {
        this.widths = widths;
        this.heights = heights;
    }
    getPerimeter() {
        return this.widths + this.heights;
    }
}
class Squares extends Rectangles {
    constructor(widths) {
        super(widths, widths);
    }
}
const sq = new Squares(20);
console.log(sq.getPerimeter());
