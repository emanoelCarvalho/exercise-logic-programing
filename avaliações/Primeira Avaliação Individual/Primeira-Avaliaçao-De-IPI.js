/*1°) Avaliação a nota da 1ª unidade de uma turma é dada pela média ponderada de dois números de acordo com a fórmula: ((p1 x a) + (p2 x b))
 dividido pela soma dos pesos, onde a é a nota da prova, b é a nota das atividades e p1 e p2 são os pesos. Implemente um programa capaz de 
 computar a média de um estudante na primeira unidade e indicar se o estudante foi aprovado (média maior ou igual a 6.0) ou não.*/

let p1 = 2;
let p2 = 3;
let a = 7;
let b = 8;
let media = ((p1 * a) + (p2 * b)) / (p1 + p2);

if (media >= 6) {
    console.log('1° : ' ,"Aprovado");
} else {
    console.log('1° : ' , "Reprovado");
}

/*2°)Transforme sua resposta da questão 1 em um subprograma que recebe como parâmetros as notas do estudante e os pesos, e retorna true se ele 
foi aprovado ou false caso contrário.*/

function mediaPonderada(p1, p2, a, b) {
    let media = ((p1 * a) + (p2 * b)) / (p1 + p2);
    if (media >= 6) {
        return media + ' aprovado';
    } else {
        return  media +' reprovado';
    }
}

console.log('2° : ' , mediaPonderada(2, 3, 7, 8));


/*3°) Implemente um programa que imprime quantos divisores pares um número possui. Exemplo, se a entrada
 do programa for 12 sua saída deverá ser 4 (note que 2, 4, 6 e 12 são os divisores pares de 12).*/

let numero = 12;
let divisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0 && i % 2 == 0) {
        divisores++;
    }
}

console.log('3° : ' ,divisores);

/*4°) Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetro um número e  retorna a quantidade de divisores pares dele.*/

function divisoresPares(numero) {
    let divisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0 && i % 2 == 0) {
            divisores++;
        }
    }
    return divisores;
}

console.log('4° : ' ,divisoresPares(12));