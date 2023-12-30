/*Imprimir os 20 primeiros números divisíveis por 3;*/

// Use um loop for para imprimir os 20 primeiros números divisíveis por 3.
for (let i = 0; i < 60; i++) { // Comece a partir de 0 e continue até 59 para garantir que obtenha os primeiros 20 números divisíveis por 3.
    if (i % 3 === 0) { // Verifica se 'i' é divisível por 3 (quando o resto da divisão por 3 é zero).
       console.log(i); // Imprime 'i' se for divisível por 3.
    }
}
