//Arithmetic

let a = 2
let b = 5
let c = 2


console.log(c)
console.log(a+b)
console.log(a/b)
console.log(a**b)

// if we use this method-

a**=1   // 2
a**=2   // 4
a**=3   // 8
a**=4   // 16
a**=5   // 32

// also we can remove '=' i.e. -
a**2    // 4

// But there's a catch, value of a will be this only when this is applied once, cause if it's applied after once, then it'll take the value of the updated a i.e. -

a**2    //4

// now if we do console.log then value of a will be changed from 2 to 4
console.log(a)

// and now when we do this method -

a**1    //4
a**2    //16

console.log(a)  // 16

// and it will eventually be based on the last one.
