// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// __________________________________________________________________
// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = "Max";

let isInstructor: boolean;

isInstructor = true;

// __________________________________________________________________
// More complex types

// Array of Strings
let hobbies: string[];

hobbies = ["Sports", "Cooking"];

// __________________________________________________________________
// Creating Type alias
type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Max",
  age: 32,
};

// person = {
//   isEmployee: true
// };

// __________________________________________________________________
// Array of Objects

let people: Person[]; // Person => Type alias

// __________________________________________________________________
// Type inference

let course: string | number = "Example-blabla-bla"; // The initial value will determine the Type Automatically

course = 12345;
