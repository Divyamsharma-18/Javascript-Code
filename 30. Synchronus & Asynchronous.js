// Synchronous

let a=prompt("Name")
let b=prompt("Age")
let c=prompt("Color")
console.log(a+" is "+b+" years old and likes color "+c);

// sync goes as single threaded, it'll show in the same order the code is written.

//Asynchronous

setTimeout(function(){
    console.log(a+" is "+b+" years old and likes color "+c);
},3000)
console.log("End");            //this'll print first and then the above statement.
