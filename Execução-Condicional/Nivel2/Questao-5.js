/*Computar o Índice de Massa Corporal (peso dividido pelo quadrado da altura) e classificar o resultado
 entre magreza (inferior a 18.5), saudável (entre 18.5 e 25), sobrepeso (acima de 25);*/
let peso = 100;
let altura = 1.70;

let imc = peso / (altura ** 2);

/*Declarei as variáveis*/

if (imc < 18.5) {
    console.log(imc, 'Magreza');
} else if (imc > 25) {
    console.log(imc, 'Sobrepeso');
} else {
    console.log(imc, 'Saudável');
}
/*Declarei nas condicionais, o que aconteceria*/