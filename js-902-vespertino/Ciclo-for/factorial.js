function factorialIterativo(n) { // este codigo nos da el factorial de n numero
    let factorial = 1; 
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    } return factorial;
}
let n = 6;  let resultado = factorialIterativo(n);
console.log(`El factorial de ${n} es: ${resultado}`);