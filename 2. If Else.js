// Example 1 - 
let a= 5
let b= 2

let cond1= a>b
let cond2= a<b

console.log(!(cond1 > cond2))





// Example 2 - 
let age=100;
let mode= "blue";
let color;




if(mode==="dark"){
    color= "black"
}
else{
    color="light"
}
console.log(color)
// here anything beside dark will print  LIGHT





if(mode==="dark"){
    color="black"
}
if(mode==="light"){
    color="white"
}
console.log(color)




// Example 3 - 
if(age>18){
    console.log("you can vote")
}
else{
    console.log("you can't vote")
}




// Example 4 - 
let mode="dark"
let theme
if(mode==="dark"){
    theme="dark"
}
else if(mode==="light"){
    theme="light"
}
else{
    theme="default"
}

console.log(theme)






// Example 5 - 
let score=prompt("Enter your score:")

if(score>=80 && score<=100){
    console.log("A grade")
}
else if(score>=60 && score<=79){
    console.log("B Grade")
}
else if(score>=35 && score<=59){
    console.log("C grade")
}
else(
    console.log("Fail")
)
