<?php 
//Faça um subprograma que retorna o maior número entre 5;

function maiorNumero($n1, $n2, $n3, $n4, $n5)
{ //Função que calcula o maior número
    $maiorNumero = 0;
    if($n1 > $maiorNumero){
        $maiorNumero = $n1;
    }
    if($n2 > $maiorNumero){
        $maiorNumero = $n2;
    }
    if($n3 > $maiorNumero){
        $maiorNumero = $n3;
    }
    if($n4 > $maiorNumero){
        $maiorNumero = $n4;
    }
    if($n5 > $maiorNumero){
        $maiorNumero = $n5;
    }

    return $maiorNumero; //Retorna o maior número
}

echo maiorNumero(10, 10, 10, 100, 10);

?>