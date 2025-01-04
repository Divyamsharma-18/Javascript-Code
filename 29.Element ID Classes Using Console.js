// div.container  >  div.box*6 >   1,2,2.5#dhai,3,4,5

// Element ID Classes
console.log("Divyam")
let boxes=document.getElementsByClassName("box")     //elementS
console.log(boxes)
boxes[3].style.backgroundColor="red"
let col=document.getElementById("dhai")               //element
col.style.backgroundColor="pink"
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})
document.querySelector(".box").style.backgroundColor="red"   //only 1st element

console.log(e=document.getElementsByTagName("div"));

// matches
e[2].matches("#dhai")           //false
e[3].matches("#dhai")           //true

//closest
e[0].closest(".container")              //show container 

// contains
console.log(document.querySelector(".container").contains(e[2]));  //true         //checks if container contains certain element e[2] or not

console.log(document.querySelector(".container").contains(document.querySelector("body")));                     //false


//exerxise 
let box=document.getElementsByClassName("box")
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="pink"
    e.style.color="blue"
})
document.querySelector("#dhai").style.backgroundColor="wheat"
document.querySelector("#dhai").style.color="red"
