<?php
//Crie um subprograma que encontre o maior elemento em um vetor.

function encontrarMaior($vetor) 
{ 
    $maior = $vetor[0]; // Inicializa o maior elemento com o primeiro elemento do vetor
    foreach ($vetor as $element) { // Percorre o vetor
        if ($element > $maior) { // Se o elemento atual for maior que o maior elemento
            $maior = $element; // O maior elemento passa a ser o elemento atual
        }
    }
    return $maior; // Retorna o maior elemento
}

$vetor = [25, 15, 40, 30, 50, 10];
$resultado = encontrarMaior($vetor);

echo "O maior elemento é: $resultado";
?>
