// 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que
// comprobar si lo es por uno de los cuatro)

const numero1 = prompt("Ingrese un número");

if(numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0){
    document.write("El número es divisible por al menos uno de estos: 2, 3, 5, 7");
}else{
    document.write("El número no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}