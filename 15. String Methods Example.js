let a = "Harry"; 
let b = "Yasht";

console.log(b.toUpperCase());  // capital -> "YASHT"
console.log(b.toLowerCase());  // lower -> "yasht"
console.log(b.length);         // length -> 5

// SLICE
console.log(b.slice(1, 5));    // "asht" (from index 1 to 5)
console.log(b.slice(1));       // "asht" (from index 1 to end)

// REPLACE
console.log(b.replace("Ya", "18divit"));  // "18divit"

// CONCATENATE
console.log(b.concat(a, " Divit", "Divay", " Divyam", 5));  // "YashtHarry DivitDivay Divyam5"



// TRIM
let d="        Divit        "
let name=d.trim();
console.log(name);
console.log(d.indexOf("D"))  //gives 8
