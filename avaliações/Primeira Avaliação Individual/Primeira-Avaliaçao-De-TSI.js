/*[1.5] Em nossa avaliação a nota da 1ª unidade é dada pela média harmônica entre dois números de acordo
 com a fórmula: [2 x (a x b)] / (a + b), onde a é a nota da prova e b é a nota das atividades.
  Implemente um programa capaz de computar a média harmônica de um estudante e indicar se o estudante deve fazer a 
  prova de recuperação (média < 6.0) ou não.*/

let notaProva = 7;
let notaAtividades = 8;

let mediaHarmonica = (2 * (notaProva * notaAtividades)) / (notaProva + notaAtividades);

if (mediaHarmonica < 6) {
    console.log('1° : ',mediaHarmonica, "Estudante deve fazer prova de recuperação");
} else {
    console.log('1° : ',mediaHarmonica, "Estudante não deve fazer prova de recuperação");
}

/*[0.5] Transforme sua resposta da questão 1 em um subprograma que
 recebe como parâmetros as notas do estudante e retorna true se ele foi aprovado ou 
 false caso contrário.*/

 function media (notaProva, notaAtividades) {
    let mediaHarmonica = (2 * (notaProva * notaAtividades)) / (notaProva + notaAtividades);
    if (mediaHarmonica < 6) {
        return mediaHarmonica + ' aprovado';
    } else {
        return mediaHarmonica + ' reprovado';
    }
}   

console.log('2° : ', media(7, 8));

/*3°) Implemente um programa que imprime quantos divisores ímpares um número possui. Exemplo, 
se a entrada do programa for 12 sua saída deverá ser 2 (note que 1 e 3 são os divisores ímpares de 12).*/

let numero = 12;
let divisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0 && i % 2 != 0) {
        divisores++;
    }
}

console.log('3° : ',divisores);

/*4°)Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetro um número retorna a quantidade de divisores ímpares dele.*/

function divisoresImpares(numero) {
    let divisores = 0;
    for (let i = 1; i <= numero; i++) {
        if (numero % i == 0 && i % 2 != 0) {
            divisores++;
        }
    }
    return divisores;
}

console.log('4° : ', divisoresImpares(12));

