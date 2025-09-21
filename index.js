// Importa la librería 'prompt-sync' para recibir la entrada del usuario.
const prompt = require('prompt-sync')();

// Función principal para la calculadora
function calculadora() {
  // Pide el primer número y con parseFloat lo convierte a un número de punto flotante.
  const num1 = parseFloat(prompt('Introduce el primer número: '));
  
  // Pide el segundo número y lo convierte a un número de punto flotante.
  const num2 = parseFloat(prompt('Introduce el segundo número: '));
  
  // Pide el operador (+, -, *, /)
  const operador = prompt('Introduce el operador (+, -, *, /): ');
  
  let resultado;

  // Usa una estructura switch para determinar qué operación realizar.
  switch (operador) {
    case '+':
      resultado = num1 + num2;
      break;
    case '-':
      resultado = num1 - num2;
      break;
    case '*':
      resultado = num1 * num2;
      break;
    case '/':
      // Verifica si el divisor es cero para evitar un error de división por cero.
      if (num2 === 0) {
        resultado = "Error: División por cero no permitida.";
      } else {
        resultado = num1 / num2;
      }
      break;
    default:
      resultado = "Error: Operador no válido.";
  }

  // Muestra el resultado final.
  console.log(`El resultado es: ${resultado}`);
}

// Llama a la función de la calculadora para iniciar el programa.
calculadora();