<?php 
// Faça um programa, que dado um numero, imprima, os múltiplos pares desse numero, até 100

$numero = 2; // numero que será verificado

for ($i=1; $i <= 100; $i++) {  // laço de repetição
    if ($i % $numero == 0) { // verifica se o numero é multiplo do numero informado
        echo $i . "\n"; // imprime o numero
    }
}
?>