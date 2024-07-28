// array, lista, objetos o variable
// son un conjunto de variables 
// los objetos son entidades que tienen atributos y los atributos son todas las caracteristicas que pertenecen al objeto
// Ejemplo de como declarar una array 
const datos = [1, "Hola", true, undefined, null];
const datos2 = new Array(1, "Hola", true, undefined, null);
const datos3 = new Array(3); //---> array con llenado posterior a la declaracion
datos3[1]="Hola Mundo";
datos3[0]=1;
const datos4 = [datos, datos2, datos3]; //---> lisya de lsitas
// Ejemplos de impresion 
console.log(datos);
console.log(datos2);
console.log(datos3);
console.log(datos4);

// objetos 
// Ejemplo de obejtos 
const alumno { // <--- obj:etos=
    //Atributos 
    edad: 15,
    peso: 80,
    nombre"Pedro"
    isBlack: false,
    amistades: ["cpnfi1", "confi2", "confi3", "confi4"]
}
//imprecion del objeto
console-log(alumno);
//impresion especifica
console-log(alumno.amistades);