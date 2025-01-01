// Loop in array

let num=[3,5,1,2,4]
for(let i=0;i<=num.length;i++){       //if 0= 6, if 1=5
    console.log(num[i])               // diff element diff lines
}

num.forEach((e)=>
{
    console.log(e*e)
})

const red=((a,b)=>{
    return a*b
})
console.log(num.reduce(red))
