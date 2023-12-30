/*Computar o resto da divisão de dois números sem utilizar o operador %;*/


// Defina os números para os quais deseja calcular o resto da divisão.
let numero1 = 10;
let numero2 = 3;

// Use um loop for para calcular o resto da divisão por subtração.
for (let i = 0; i <= numero1; i++) {
    numero1 -= numero2; // Subtraia 'numero2' de 'numero1' repetidamente.
}

// O valor de 'numero1' após o loop contém o resto da divisão.
console.log(numero1);
