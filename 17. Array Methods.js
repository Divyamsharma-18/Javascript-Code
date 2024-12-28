// toString
let num=[1,2,3,4]
let b=num.toString()
console.log(b)


// join
let c=num.join("_")             //("and")         //1_2_3_4
console.log(c)


let str="ignore"                // works only on browser console
let arr=Array.from(str)
[arr[1],arr[2]]=[arr[2],arr[1]]
console.log(arr)
arr.join()


// pop
let r=num.pop()
console.log(r)                     //4


// push 
let r=num.push(55)
console.log(num)                    //55


// shift
let r=num.shift()                   // removes 1st Element of Array
console.log(num)


// unswitch
let r=num.unshift(18)               //adds 18 to first of array
console.log(num)



//delete   //not method but operator
delete num[0]               //length is same but 0th is empty
console.log(num)


// concat
let num2=[5,6,7,8]
console.log(num.concat(num2))
// or 
let newarray=num.concat(num2)


let num3=[9,10,11,12]
console.log(num.concat(num2,num3))


// sort          sort karta hai 1,2 & alphabet
let arr=[1,2,3,6,5,4]
arr.sort()
console.log(arr)            //1,2,3,4,5,6


let str="divyam"
let arr=Array.from(str)
arr.sort()
console.log(arr)

let arr=[1000,2,33,45,9,54,68,86,1008]       
                         //no matter how big the number is, if it's 1, it'll come first
arr.sort()
console.log(arr)

// compare
let compare=(a,b)=>{
    return b-a            // "a-b" ascending order  "b-a" descending order
}
let arr=[1000,2,33,45,54,68,1008,86]  
arr.sort(compare)
console.log(arr)


// reverse
arr.reverse()
console.log(arr)

// splice
arr.splice(2,4,21,12,18,24,13)
        //2 print 4 remove  21,12,18,24,13 is added after 2
console.log(arr)

// slice
const newArr=arr.slice(2)           //starting 2 chopped off
console.log(newArr)

const newArr=arr.splice(2,4)           //start 2 chopped, next 4 print
console.log(newArr)
