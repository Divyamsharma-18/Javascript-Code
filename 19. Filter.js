//FILTER  sorted array elements gets printed

let arr=[2,4,6,8]
const greaterThanFive=(e)=>{
    if(e>5){
        return true
    }else{
        return false
    }
}
let newArr=[]
console.log(arr.filter(greaterThanFive))



let arr2=[1,2,3,4,5,6,7,8,9,10]
const divByTwo=(e)=>{
    if(e%2){                //has rem also can be used for even odd
        return true
    }else{
        return false
    }
}
console.log(arr2.filter(divByTwo))
