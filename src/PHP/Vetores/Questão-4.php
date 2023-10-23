<?php
// Crie um subprograma que verifique se um determinado elemento existe em um vetor.

function elementoExiste($vetor, $elementoProcurado)
 {
    for ($i = 0; $i < count($vetor); $i++) { // Percorre o vetor
        if ($vetor[$i] == $elementoProcurado) { // Se o elemento atual for igual ao elemento procurado
            return true; // Retorna verdadeiro
        }
    }
}

$vetor = [10, 20, 30, 40, 50];
$elementoProcurado = 30;

if (elementoExiste($vetor, $elementoProcurado)) { 
    echo "$elementoProcurado existe no vetor."; 
} else {
    echo "$elementoProcurado não existe no vetor.";
}
?>
