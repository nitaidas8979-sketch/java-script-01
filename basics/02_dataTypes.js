"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 
    +
     3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

/*
| Type      | Example    |
| --------- | ---------- |
| String    | `"hello"`  |
| Number    | `10`       |
| Boolean   | `true`     |
| Undefined | `let x;`   |
| Null      | `null`     |
| BigInt    | `123n`     |
| Symbol    | `Symbol()` |
| Object    | `{}`       |
| Array     | `[]`       |
*/


// Primitive Data Types

let str = "Hello World";        // String
let num = 25;                  // Number
let isTrue = true;             // Boolean
let undef;                     // Undefined
let empty = null;              // Null
let bigNumber = 12345678901234567890n; // BigInt
let uniqueId = Symbol("id");   // Symbol

// Non-Primitive Data Types

let person = {                 // Object
  name: "Nitai",
  age: 20
};

let fruits = ["apple", "banana", "mango"]; // Array

// Output all values with their types

console.log("String:", str, "| Type:", typeof str);
console.log("Number:", num, "| Type:", typeof num);
console.log("Boolean:", isTrue, "| Type:", typeof isTrue);
console.log("Undefined:", undef, "| Type:", typeof undef);
console.log("Null:", empty, "| Type:", typeof empty); // object (JS bug)
console.log("BigInt:", bigNumber, "| Type:", typeof bigNumber);
console.log("Symbol:", uniqueId, "| Type:", typeof uniqueId);
console.log("Object:", person, "| Type:", typeof person);
console.log("Array:", fruits, "| Type:", typeof fruits);