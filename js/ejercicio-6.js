// 6.-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const numero1 = parseInt(prompt("Ingrese un primer numero"));
const numero2 = parseInt(prompt("Ingrese un segundo numero"));

if (numero1 > numero2) {
  document.write("El numero " + numero1 + " es mayor que el numero " + numero2);
} else if (numero2 > numero1) {
  //document.write("La variable numero " + numero2 + " es mayor que el numero " + numero1);
  document.write(`El número ${numero2} es mayor que el número ${numero1}`)
} else {
  document.write("Los numeros ingresados son iguales (" + numero2 + ")");
}