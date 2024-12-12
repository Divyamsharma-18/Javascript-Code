// Sum
function sum(a,b){
    return a+b
}
result=sum(10,5)
console.log("Sum of a and b is ",result)



// Substract
function sub(a,b){
    return a-b
}
result=sub(10,5)
console.log("Sub of a and b is ",result)



// Division 
function div(a,b){
    return a/b
}
result=div(10,5)
console.log("Div of a and b is ",result)




// Multiply
function mul(a,b){
    return a*b
}
result=mul(10,5)
console.log("Mul of a and b is ",result)




function rem(a,b){
    return a%b
}
result=rem(10,5)
console.log("Rem of a and b is ",result)




function sum(a,b, c=3){                                //here c is 3 const declared
    return a+b+c
}
result1=sum(10,5)                                      //if not declaring sum as var (result) then output is undefined
result2=sum(10,4)
result3=sum(10,3)
result4=sum(10,2,1)                                    //value of c is changed as 1
console.log("Sum of a and b is ",result1)
console.log("Sum of a and b is ",result2)
console.log("Sum of a and b is ",result3)
console.log("Sum of a and b is ",result4)
