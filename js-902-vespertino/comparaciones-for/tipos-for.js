// tipos de for 
/**Estructura
*for(inicializacion, ; condicion; actualizacion){
*    bule
* }
*
* i = i+1;
* i =+ 1;
* i++
* i==
*/

// for tradicional 
for(let i=0; i < 10; i++){
// esto es un bucle
console.log(i)
}
let lista = [1, 12, 34, 56, 568, 454]
for(let i=0; i < lista.length /*longitud de la cadena */; i++){
    console.log(lista[i]);
}

// foreach
lista.forEach(valor => /*arrow function*/{
    console.log(valor);
}
)
// for...of
for(let valor of lista){
    console.log(valor);
}
// for...in
let persona {
    nombre = "leo",
    edad = 21,
    isdeveloper = true
} 

for (let propiedad in persona){
    console.log(propiedad);
    
}