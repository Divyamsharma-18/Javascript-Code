// DOM firstElementChild, children, nextElementSibling, previousElementSibling, previousSibling, nextSibling 

//div.container has 5 boxes
document.body.firstElementChild
document.body.firstElementChild.children[0]     //box1
document.body.firstElementChild.children[1]     //box2
document.body.firstElementChild.children[2]     //box3
document.body.firstElementChild.children[3].nextElementSibling          //box4
document.body.firstElementChild.children[3].previousElementSibling      //box3
document.body.firstElementChild.children[3].previousSibling             //text
document.body.firstElementChild.children[3].nextSibling                 //text
