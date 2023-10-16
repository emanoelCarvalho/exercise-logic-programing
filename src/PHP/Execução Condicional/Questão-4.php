<?php 
// Faça um programa que dado um um dia da semana, mostre a grade curricular do dia

$dia = "Segunda"; //Variável que recebe o dia da semana

switch ($dia) {
    case 'Segunda':
        echo "Matemática, Português, História, Geografia, Ciências";
        break;
    case 'Terça':
        echo "Português, Matemática, Ciências, História, Geografia";
        break;
    case 'Quarta':
        echo "Ciências, Português, Matemática, Geografia, História";
        break;
    case 'Quinta':
        echo "História, Ciências, Português, Matemática, Geografia";
        break;
    case 'Sexta':
        echo "Geografia, História, Ciências, Português, Matemática";
        break;
        default:
        echo "Não há aula";
        break;
}
?>