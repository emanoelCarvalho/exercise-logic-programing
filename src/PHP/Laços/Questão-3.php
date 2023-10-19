<?php 
//Faça  um programa que dado dois números imprima os numeros pares entre eles

$numero1 = 1; //Primeiro numero

$numero2 = 10; //Segundo numero

for ($i=$numero1; $i <= $numero2; $i++) { //Laço de repetição
    if ($i % 2 == 0) { //Verifica se o numero é par
        echo $i . "\n"; //Imprime o numero
    }
}
?>