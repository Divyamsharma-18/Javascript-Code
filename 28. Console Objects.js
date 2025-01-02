// Console Objects

console.log(console)
console.log("hey")
console.error("ERROR HO GAYA")           //red circle cross

console.assert(5>53)                     //assertion fail
console.assert(55>53)                    //no issues

console.warn("Hazardious")               //yellow triangle with !

console.info("Hey, wassup")

console.assert("err" != false)              //nothing happens cause it's true
console.assert("err" == false)              //error

console.time("a")
console.timeEnd("a")

console.time("FOR")
for(let i=1;i<=5;i++){
    console.log("abcd")
}
console.timeEnd("FOR")

let obj={a:1,
         b:2,
         c:3}
console.table(obj)                          //creates a table
