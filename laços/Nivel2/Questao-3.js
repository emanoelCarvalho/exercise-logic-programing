/*Computar o resto da divisão de dois números sem utilizar o operador %;*/


let numero1  =  10;
let numero2  =  3;

for (let i = 0; i <= numero1; i++ ) {
    numero1 -= numero2;
}
console.log(numero1);
