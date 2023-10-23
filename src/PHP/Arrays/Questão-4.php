<?php 
//Faça um programa que inverta os elementos de uma matriz.

function inverterMatriz($matriz) 
{
    $matrizInvertida = []; // Inicializa a matriz invertida
    foreach ($matriz as $linha) { // Percorre a matriz
        $linhaInvertida = []; // Inicializa a linha invertida
        foreach ($linha as $elemento) { // Percorre a linha atual
            array_unshift($linhaInvertida, $elemento); // Adiciona o elemento atual no início da linha invertida
        }
        array_push($matrizInvertida, $linhaInvertida); // Adiciona a linha invertida na matriz invertida
    }
    return $matrizInvertida; // Retorna a matriz invertida
}

$matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

$matrizInvertida = inverterMatriz($matriz);
print_r($matrizInvertida);
?>