//  Comparaciones 

// igualdad 
if  (5 == 5){
    console.log("5 ese igual que 5");
}

if  (5 === 5){
    console.log("5 ese igual que 5");
}


// == solo compara los valores 
// === busca a demas del valor aagregado, el tipo de variable y lo hace de manera especifica 
let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

if(a == b){
    console.log("a es igual a b debil");
}

if(a === b){
    console.log("a es igual a b fuertes");
}
// desigualdad

// != solo compara los valores 
// !== busca a demas del valor aagregado, el tipo de variable y lo hace de manera especifica 
let c=4;
let d="4";

if(c != d){
console.log("c es diferente que b debil");
}
if(c !== d){
    console.log("c es diferente que b fuerte");
    }
// mayor que y menor que

let max =10;
let min =5;

if (max > min){
    console.log("max es mayor que min");
}
if (max >= min){
    console.log("max es mayor o igual que min");
}
if (min < max){
    console.log("min es menor que max");
}
if (min <= max){
    console.log("min es menor o igual que max");
}