//MAP= same operation on each array

// Example 1
let arr=[1,12,18,24,11];
let newarr=[]
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element**2)
    newArr.push(element+1)
    newArr.push(element+1)
}
console.log(newarr)
console.log(arr)


let map= arr.map((e)=>{
    return e**2
})
console.log(map)


// Example 2
let arr=[1,2,3,4];
let newarray=[];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarray.push(element**2)
}
console.log(arr)
console.log(newarray)

let newArr= arr.map((e)=>{
    return e**2
})
console.log(arr)
console.log(newArr)


// Example 3
let arr=[1,2,3,4]
let newArr= arr.map((e,index,Array)=>{     //can choose anyone
    return e**2
})
console.log(newArr)
