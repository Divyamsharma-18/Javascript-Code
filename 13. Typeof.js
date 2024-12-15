let a="Divyam";
let b=18;
var c=null;
const d=true;
let pi=3.14;
let e;
console.log(a,b,c,d,pi,e);
console.log(typeof a,typeof b,typeof c,typeof d,typeof pi,typeof e);



// Special cases

// Example 1: Plain Object
let obj = { name: "John", age: 30 };
console.log(typeof obj); // Output: "object"

// Example 2: Null (special case)
let emptyValue = null;
console.log(typeof emptyValue); // Output: "object" (quirk of JavaScript)

// Example 3: Array (also an object)
let arr = [1, 2, 3];
console.log(typeof arr); // Output: "object"
console.log(Array.isArray(arr)); // Output: true (specific array check)

// Example 4: Function (special case for objects)
function sayHello() {
  console.log("Hello!");
}
console.log(typeof sayHello); // Output: "function"

// Example 5: Date Object
let date = new Date();
console.log(typeof date); // Output: "object"

// Example 6: Advanced Differentiation
console.log(Object.prototype.toString.call(obj)); // Output: "[object Object]"
console.log(Object.prototype.toString.call(arr)); // Output: "[object Array]"
console.log(Object.prototype.toString.call(date)); // Output: "[object Date]"
console.log(Object.prototype.toString.call(emptyValue)); // Output: "[object Null]"
