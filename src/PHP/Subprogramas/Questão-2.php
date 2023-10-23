<?php 
//Faça um subprograma que dado 1 dia da semana(em número), retorna o dia anterior.

function diaAnterior($dia)
{ //Função que calcula o dia anterior
    $diaAnterior = 0;
    if($dia == 1){
        $diaAnterior = 7;
    }
    else{
        $diaAnterior = $dia - 1;
    }

    return $diaAnterior; //Retorna o dia anterior
}
echo diaAnterior(5);
?>