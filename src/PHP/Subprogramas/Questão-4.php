<?php 
//Faça um subprograma que dado as linhas e colunas imprime um quadrado de asteriscos.

function quadrado($linhas, $colunas)
{ //Função que calcula o quadrado
    for($i = 0; $i < $linhas; $i++){ //Loop para as linhas
        for($j = 0; $j < $colunas; $j++){ //Loop para as colunas
            echo "*"; //Imprime o asterisco
        }
        echo "\n"; //Quebra de linha
    }
}

quadrado(10, 10);

?>