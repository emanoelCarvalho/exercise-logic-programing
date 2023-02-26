 /* Dado dois números,  imprimir em ordem decrescente; */

 let numero1 = 3;
let numero2 = 4;

let maior;
let menor;

/*Declarei as variáveis*/

if (numero1 <= numero2) {
    menor = numero1;
    maior = numero2;
} else {
    menor = numero2;
    maior = numero1;
}
/*Fiz uma condicional, para caso um numero for menor ou igual, ele atribui a variável menor, enquanto o outro, atribui a maior. Caso contrário a mesma coisa*/

console.log(menor, maior);

/*Chamei o console, para imprimir, do maior para o menor*/