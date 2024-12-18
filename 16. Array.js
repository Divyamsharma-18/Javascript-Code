//ARRAY
let arr=[1,2,3,4,5]

console.log(arr)
arr[0]=518     //changed value whether string doesn't does this
console.log(arr, typeof arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);


console.log(arr.toString())      //change to string
console.log(arr.join("  "))      //"   " adds space   "and"  1and2and3and.....

console.log(arr.pop(5))          //5th one is removed
console.log(arr)


let a=[1,3,99,6,88]                                         //index- place value
for (let index = 0; index < a.length; index++) {            //element-content of array
    const element = a[index];                               
     console.log(element)
}       



a.forEach((value,index,array) => {
    console.log(value,index,array)
});
