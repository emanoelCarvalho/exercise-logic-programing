/*[1.5] Em nossa avaliação a nota da 1ª unidade é dada pela média harmônica entre dois números de acordo
 com a fórmula: [2 x (a x b)] / (a + b), onde a é a nota da prova e b é a nota das atividades.
  Implemente um programa capaz de computar a média harmônica de um estudante e indicar se o estudante deve fazer a 
  prova de recuperação (média < 6.0) ou não.*/

// Definindo as notas da prova e atividades
let notaProva = 7;
let notaAtividades = 8;

// Calculando a média harmônica
let mediaHarmonica = (2 * (notaProva * notaAtividades)) / (notaProva + notaAtividades);

// Verificando se o estudante deve fazer a prova de recuperação
if (mediaHarmonica < 6) {
    console.log('1° : ',mediaHarmonica, "Estudante deve fazer prova de recuperação");
} else {
    console.log('1° : ',mediaHarmonica, "Estudante não deve fazer prova de recuperação");
}

/*[0.5] Transforme sua resposta da questão 1 em um subprograma que
 recebe como parâmetros as notas do estudante e retorna true se ele foi aprovado ou 
 false caso contrário.*/

// Função para calcular a média harmônica e verificar se o estudante foi aprovado
function media (notaProva, notaAtividades) {
    let mediaHarmonica = (2 * (notaProva * notaAtividades)) / (notaProva + notaAtividades);
    if (mediaHarmonica < 6) {
        return false;
    } else {
        return true;
    }
}   

console.log('2° : ', media(7, 8));

/*3°) Implemente um programa que imprime quantos divisores ímpares um número possui. Exemplo, 
se a entrada do programa for 12 sua saída deverá ser 2 (note que 1 e 3 são os divisores ímpares de 12).*/

// Definindo o número para o qual queremos encontrar os divisores ímpares
let numero = 12;
let divisores = 0;

// Usando um loop for para encontrar divisores ímpares
for (let i = 1; i <= numero; i++) {
    if (numero % i == 0 && i % 2 != 0) {
        divisores++;
    }
}

console.log('3° : ',divisores);

/*4°)Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetro um número retorna a quantidade de divisores ímpares dele.*/

// Função para encontrar a quantidade de divisores ímpares de um número
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
