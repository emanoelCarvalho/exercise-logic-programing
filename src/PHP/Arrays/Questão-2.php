<?php
//Crie um subprograma que encontre o maior elemento em uma matriz.

function encontrarMaiorMatriz($matriz) 
{
    $maior = $matriz[0][0]; // Inicializa o maior com o primeiro elemento da matriz
    foreach ($matriz as $linha) { // Percorre a matriz
        foreach ($linha as $elemento) { // Percorre a linha atual
            if ($elemento > $maior) { // Se o elemento atual for maior que o maior 
                $maior = $elemento; // O maior recebe o elemento atual
            }
        }
    }
    return $maior; // Retorna o maior
}

$matriz = [
    [25, 15, 40],
    [30, 50, 10],
    [5, 20, 35]
];

$resultado = encontrarMaiorMatriz($matriz);

echo "O maior elemento na matriz é: $resultado";
?>
