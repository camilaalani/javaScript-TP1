// 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen.
// Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)

let frase = prompt("Ingrese una frase");
let nFrase = frase.length;
let i;

for(i= 0; i < nFrase; i++){
    if(frase.charAt(i,1) === "a" || frase.charAt(i,1) === "e" || frase.charAt(i,1) === "i" || frase.charAt(i,1) === "o" || frase.charAt(i,1) === "u"){
        document.write(frase.charAt(i,1));
    }
}