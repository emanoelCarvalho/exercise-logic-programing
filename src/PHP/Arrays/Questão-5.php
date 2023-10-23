<?php 
//Crie um subprograma que adiciona 0 nas diagonais de uma matriz quadrada.

function adicionarZeroDiagonais($matriz) 
{
    $matrizComZero = []; // Inicializa a matriz com zero
    for ($i = 0; $i < count($matriz); $i++) { // Percorre a matriz
        $linhaComZero = []; // Inicializa a linha com zero
        for ($j = 0; $j < count($matriz[$i]); $j++) { // Percorre a linha atual
            if ($i == $j) { // Se o índice da linha for igual ao índice da coluna
                array_push($linhaComZero, 0); // Adiciona 0 na linha
            } else { // Se não
                array_push($linhaComZero, $matriz[$i][$j]); // Adiciona o elemento atual na linha
            }
        }
        array_push($matrizComZero, $linhaComZero); // Adiciona a linha na matriz
    }
    return $matrizComZero; // Retorna a matriz
}

$matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

$matrizComZero = adicionarZeroDiagonais($matriz);
print_r($matrizComZero);
?>