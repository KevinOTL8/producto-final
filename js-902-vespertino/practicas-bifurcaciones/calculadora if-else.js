function calculadora(num1, num2, operador) {
  let resultado;

  if (operador === '+') {
    resultado = num1 + num2;
  } else if (operador === '-') {
    resultado = num1 - num2;
  } else if (operador === '*') {
    resultado = num1 * num2;
  } else if (operador === '/') {
    if (num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = "Error: No se puede dividir entre cero.";
    }
  } else {
    resultado = "Error: Operador no válido.";
  }

  if (typeof resultado === "number") {
    return resultado;
  } else {
    return resultado;
  }
}

// Ejemplo de uso
console.log(calculadora(10, 5, '+'));