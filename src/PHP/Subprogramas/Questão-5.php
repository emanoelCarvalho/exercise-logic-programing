<?php
function estrelaDeAsteriscos($tamanho) 
{
    if ($tamanho % 2 == 0) {
        $tamanho++; // Certifica-se de que o tamanho é ímpar para uma estrela simétrica
    }

    $meio = (int) ($tamanho / 2);

    for ($i = 0; $i < $tamanho; $i++) {
        for ($j = 0; $j < $tamanho; $j++) {
            if ($i == $meio || $j == $meio || $i + $j == $meio || $i - $j == $meio) {
                echo "*"; // Imprime um asterisco se a condição for atendida
            } else {
                echo " "; // Imprime um espaço em branco caso contrário
            }
        }
        echo "\n"; // Quebra de linha
    }
}

estrelaDeAsteriscos(9); // Chama a função com um tamanho de 9
?>
