<?php
//Crie um subprograma que calcule a soma de todos os elementos em uma matriz.

function somaElementosMatriz($matriz) 
{
    $soma = 0; // Inicializa a soma com 0
    foreach ($matriz as $linha) { // Percorre a matriz
        foreach ($linha as $elemento) { // Percorre a linha atual
            $soma += $elemento; // Soma o elemento atual ao valor da soma
        }
    }
    return $soma; // Retorna a soma
}

$matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

$resultado = somaElementosMatriz($matriz);

echo "A soma de todos os elementos na matriz é: $resultado";
?>
