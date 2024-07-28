//Strinf (cadena de caracteres )

let str_1 ="hola soy texto con comillas ";
let str_2 = 'Hola soy un texto con comillas simples '
let str_3 = "comillas dentro de las comillas \"ejemplo\""
let str_4 = 'comillas dentro de comillas simples "ejemplo"'
let str_5 = "comillas dentro de comillas 'ejemplo'"

console.log(str_1);
console.log(str_2);
console.log(str_3);
console.log(str_4);
console.log(str_5);

// comillas ivertidas (backticks) Alt gr + } x2 = ``
let str_6 = `comillas invertidas o backticks`;
console.log(str_6);

let nombre = "Leonel"
let saludar =`Hola, ${nombre} bienvenido`;

console.log(saludar);

let plantilla = `
<html>
<h3>Pagina web de ${nombre}</h3>
<p>Esto es un parrafo</p>
</html>
`

console.log(plantilla);