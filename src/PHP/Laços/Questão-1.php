<?php 
//Faça um programa que dado um numero, decremente o mesmo, té chegar, no mesmo, com o valor negativo.

$numero = 10; //Valor inicial
$numeroNegativo = -10; //Valor final

while($numero >= $numeroNegativo){ //Enquanto o numero for maior ou igual a 0, ele vai decrementar
    echo $numero . "\n";
    $numero--; //Decremento
}
?>