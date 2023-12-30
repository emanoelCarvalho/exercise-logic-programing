/* Imprimir os 10 primeiros números divisíveis por 10;*/

// Use um loop for para imprimir os 10 primeiros números divisíveis por 10.
for (let i = 0; i < 100; i++) { // Inicie a partir de 0 e continue até 99 para garantir que você obtenha os primeiros 10 números divisíveis por 10.
    if (i % 10 === 0) { // Verifica se 'i' é divisível por 10 (quando o resto da divisão por 10 é zero).
        console.log(i); // Imprime 'i' se for divisível por 10.
    }
}
