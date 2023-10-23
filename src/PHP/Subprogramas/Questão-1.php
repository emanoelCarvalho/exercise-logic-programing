<?php 
//Faça um subprograma que dado 3 numeros, retorna a média entre eles.

function media($n1, $n2, $n3)
{ //Função que calcula a média
    $media = ($n1 + $n2 + $n3) / 3;

    return $media; //Retorna a média
}
echo media(10, 10, 10);
?>