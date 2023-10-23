<?php 
//Faça um subprograma que faça a busca de um elemento em uma matriz.

function elementoExiste($matriz, $elementoProcurado) 
{
    foreach ($matriz as $linha) { // Percorre a matriz
        foreach ($linha as $elemento) { // Percorre a linha atual
            if ($elemento == $elementoProcurado) { // Se o elemento atual for igual ao elemento procurado
                return true; // Retorna verdadeiro
            }
        }
    }
}

$matriz = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

?>