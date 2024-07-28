function tipoDeTriangulo(lado1, lado2, lado3) {
    if (lado1 <= 0 , lado2 <= 0 , lado3 <= 0) {
      return "Las medidas deben ser mayores que cero.";
    } if (lado1 + lado2 <= lado3 , lado1 + lado3 <= lado2 , lado2 + lado3 <= lado1) {
      return "Las medidas no forman un triángulo.";
    } if (lado1 === lado2 && lado2 === lado3) {
      return "El triángulo es equilátero.";
    } else if (lado1 === lado2 , lado1 === lado3 , lado2 === lado3) {
      return "El triángulo es isósceles.";
    } else {
      return "El triángulo es escaleno.";
    }
  }
  
  // intercambio de variables
  console.log(tipoDeTriangulo(3, 7, 3));