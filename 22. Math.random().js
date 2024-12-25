// Math.random() is a built-in JavaScript function that returns a floating-point number between 0 (inclusive) and 1 (exclusive)

console.log(Math.random());     //0.4723 (example)

// Random Integer Between 1 and 10:
let randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt);        // 5

// Random Boolean (True or False):
let randomBool = Math.random() > 0.5;
console.log(randomBool);

// Random Array Element:
let colors = ["red", "blue", "green", "yellow", "pink"];
let randomColor = colors[Math.floor(Math.random() * colors.length)];
console.log(randomColor);        //pink
