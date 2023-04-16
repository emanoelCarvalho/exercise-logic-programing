/*[1.5] Em nossa avaliação a nota da 1ª unidade é dada pela média harmônica entre dois números de acordo com a fórmula: [2 x (a x b)] / (a + b), onde a é a nota da prova e b é a nota das atividades. Implemente um programa capaz de computar a média harmônica de um estudante e indicar se o estudante deve fazer a prova de recuperação (média < 6.0) ou não.

[0.5] Transforme sua resposta da questão 1 em um subprograma que recebe como parâmetros as notas do estudante e retorna true se ele foi aprovado ou false caso contrário.

[2.5] Implemente um programa que imprime quantos divisores ímpares um número possui. Exemplo, se a entrada do programa for 12 sua saída deverá ser 2 (note que 1 e 3 são os divisores ímpares de 12).
 
[0.5] Transforme sua resposta da questão 3 em um subprograma que recebe como parâmetro um número retorna a quantidade de divisores ímpares dele.

[2.5] Qual a saída no console do programa abaixo para a chamada xyz(1, 2, true)?

function xyz(a, b, c) {
    i = 1
    while (true) {
        console.log(a,b,c)
        a = a + i;  b = b - a
        c = (a == b) || (c != i)
        i = i * 10;
        if (i > 102) {
            break // sai do laço
        }
    }
}
*/
