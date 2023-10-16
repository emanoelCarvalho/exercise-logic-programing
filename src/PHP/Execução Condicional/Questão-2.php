<?php 
//Faça um programa que dado 2 n´umeros inteiros, mostre o maior deles.

$numero1 = 3; //Variável que recebe o primeiro número
$numero2 = 7; //Variável que recebe o segundo número

if($numero1 > $numero2){ //Condição para saber se o primeiro número é maior que o segundo
    echo "O primeiro número é maior que o segundo"; //Mensagem que será exibida caso o primeiro número seja maior que o segundo
}else if($numero1 < $numero2){ //Condição para saber se o primeiro número é menor que o segundo
    echo "O segundo número é maior que o primeiro"; //Mensagem que será exibida caso o segundo número seja maior que o primeiro
}else{
    echo "Os números são iguais"; //Mensagem que será exibida caso os números sejam iguais
};

?>