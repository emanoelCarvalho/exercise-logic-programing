/* Dado dois números, imprimir em ordem crescente; */

let numero1 = 3;
let numero2 = 4;

let maior;
let menor;

/*Declarei as variáveis*/

if (numero1 >= numero2) {
    maior = numero1;
    menor = numero2;
} else {
    maior = numero2;
    menor = numero1;
}
/*Fiz uma condicional, para caso um numero for maior, ele atribui a variável maior, enquanto o outro, atribui a menor. Caso contrário a mesma coisa*/

console.log(menor, maior);

/*Chamei o console, para imprimir, do menor para o maior*/