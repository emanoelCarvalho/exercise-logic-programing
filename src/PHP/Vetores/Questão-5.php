<?php 
// Crie um subprograma que calcule a multiplicação de todos os elementos em um vetor.

function multiplicarElementos($vetor) { 
    $multiplicacao = 1; // Inicializa a multiplicação com 1
    foreach ($vetor as $element) { // Percorre o vetor
        $multiplicacao *= $element; // Multiplica o elemento atual ao valor da multiplicação
    }
    return $multiplicacao; // Retorna a multiplicação
}

$vetor = [5, 10, 15, 20];
?>