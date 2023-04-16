/*[1.5] Avaliação a nota da 1ª unidade de uma turma é dada pela média ponderada de dois números de acordo com a fórmula: ((p1 x a) + (p2 x b)) dividido pela soma dos pesos, onde a é a nota da prova, b é a nota das atividades e p1 e p2 são os pesos. Implemente um programa capaz de computar a média de um estudante na primeira unidade e indicar se o estudante foi aprovado (média maior ou igual a 6.0) ou não.

[0.5] Transforme sua resposta da questão 1 em um subprograma que recebe como parâmetros as notas do estudante e os pesos, e retorna true se ele foi aprovado ou false caso contrário.

[2.5] Implemente um programa que imprime quantos divisores pares um número possui. Exemplo, se a entrada do programa for 12 sua saída deverá ser 4 (note que 2, 4, 6 e 12 são os divisores pares de 12).
 
[0.5] Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetro um número e  retorna a quantidade de divisores pares dele.

[2.5] Qual a saída no console do programa abaixo para a chamada xyz(true,1,2)?


function xyz(a, b, c) {
        i = 11
        while (!a && i > c) {
            a = (b > c) && (i > b)
            c = c - b
            b = c - 2 * b
            console.log(a,b,c,i)
        }  
}

*/

