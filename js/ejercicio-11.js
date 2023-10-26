// 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por 
// los que es divisible)

const numero1 = prompt("Ingrese un número");

if(numero1 % 2 === 0 || numero1 % 3 === 0 || numero1 % 5 === 0 || numero1 % 7 === 0){
    if(numero1 % 2 === 0){
        document.write("El número es divisible por 2. ");
    }
    if(numero1 % 3 === 0){
        document.write("El número es divisible por 3. ");
    }
    if(numero1 % 5 === 0){
        document.write("El número es divisible por 5. ");
    }
    if(numero1 % 7 === 0){
        document.write("El número es divisible por 7. ");
    }
}else{
    document.write("El número no es divisible ni por 2, ni por 3, ni por 5, ni por 7");
}