<?php
// Crie um subprograma que troque o valor das duas primeiras posições de um vetor.

function trocarPosicoes(&$vetor) {
    $temp = $vetor[0]; // Guarda o valor da primeira posição
    $vetor[0] = $vetor[1]; // Troca o valor da primeira posição com o da segunda
    $vetor[1] = $temp;  // Troca o valor da segunda posição com o da primeira
}

$vetor = [10, 20, 30, 40];
trocarPosicoes($vetor);

print_r($vetor); // [20, 10, 30, 40]
?> 
