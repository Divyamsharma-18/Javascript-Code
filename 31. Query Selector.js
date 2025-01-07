// querySelector is used interact to an element using id or class (".box") or ("#box")

console.log(document.querySelector(".box").innerHTML);
console.log(document.querySelector(".box").innerText);
console.log(document.querySelector(".box").outerHTML);
console.log(document.querySelector(".cont").outerText);

// all these will print the described value of those elements.

console.log(document.querySelector("body").tagName);      // BODY
console.log(document.querySelector("body").textContent);
console.log(document.querySelector(".cont").textContent);
