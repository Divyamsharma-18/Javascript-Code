// Alert - Displays a alert popup message with an "OK" button.

// Example 1
alert("Hello your script works")
let a=prompt("Enter a number")
if(a<10){
    console.log("under or equal to 10")
}
else if(a<=10){
console.log("equal")
}
else{
    console.log("more")
}


// Example 2
alert("Enter value of a")
let a=prompt("Enter a","518")   //518 default value

a=Number.parseInt(a)            //type to number

alert("You entered a of type " + (typeof a))    //prints as string
document.write(a)                               //write prompt value on webpage
