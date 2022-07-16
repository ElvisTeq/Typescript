// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// More complex types

// Array of Strings
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// Object Type
let person: {
  name: string;
  age: number;
};

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true
// };

// Array of Object types
let people: {
  name: string;
  age: number;
}[];

// Type inference

let course: string | number = "Example-blabla-bla"; // The initial value will determine the Type Automatically

course = 12345;
