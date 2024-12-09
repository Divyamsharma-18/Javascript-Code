// Basically 2 types - primitive types and non-primitive types.

// Primitive Types
// 0. Number - 
let age = 18;                                  // integer
let price = 5.18;                              // floating-point

// 1. String -
let name = 'Divit';                            // single quotes
let greeting = "Hallo";                        // double quotes
let message = `Hi, ${name}!`;                  // template literal

// 2. Boolean -
let isLoggedIn = true;

// 3. Undefined -
let result;
console.log(result);                           // undefined

// 4. Null - 
let user = null;

// 5. BigInt (introduced in ES2020) -
let bigNumber = 1234567890123456789012345678901234567890n;

// 6. Symbol (introduced in ES6) -
let sym1 = Symbol('description');
let sym2 = Symbol('description');
console.log(sym1 === sym2);                    // false, as each Symbol is unique



// Non-Primitive Types

// 0. Object -
let person = {
  name: 'Alice',
  age: 30,
  isStudent: false
};

// 1. Array -
let numbers = [1, 2, 3, 4, 5];

// 2. Function - 
function greet(name) {
  return `Hello, ${name}`;
}

// 3. Date - 
let today = new Date();
console.log(today.toDateString());

// 4. Set (introduced in ES6) - 
let uniqueNumbers = new Set([1, 2, 3, 3, 4]);
console.log(uniqueNumbers);                     // Set(4) {1, 2, 3, 4}

// 5. Map (introduced in ES6) - 
let userRoles = new Map();
userRoles.set('Alice', 'Admin');
userRoles.set('Bob', 'Editor');



