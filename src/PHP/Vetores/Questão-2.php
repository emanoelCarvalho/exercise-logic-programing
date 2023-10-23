<?php
//Crie um subprograma que calcule a soma de todos os elementos em um vetor.

function somaElementos($vetor) 
{ 
    $sum = 0; // Inicializa a soma com 0
    foreach ($vetor as $element) { // Percorre o vetor
        $sum += $element; // Soma o elemento atual ao valor da soma
    }
    return $sum; // Retorna a soma
}

$vetor = [5, 10, 15, 20];
$resultado = somaElementos($vetor);

echo "A soma dos elementos é: $resultado";
?>
