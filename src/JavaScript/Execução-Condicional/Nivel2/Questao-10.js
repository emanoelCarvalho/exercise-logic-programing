/*Dado o nome de um dos integrantes da sua sala, imprimir o sobrenome da pessoa (ao menos 3 pessoas).*/

let nome = 'Placido';
let sobrenome;

/*Declarei as variáveis*/

switch (nome) {
    case 'Emanoel':
        sobrenome = nome + ' Carvalho';
        break;

    case 'Cleiton':
        sobrenome = nome + ' Lucas';
        break;

    case 'Placido':
        sobrenome = nome + ' Lima';
        break;

    case 'Alef':
        sobrenome = nome + ' Thiago';
        break;
}

/*Utilizei o switch case, para realizar as condicionais*/

console.log(sobrenome);

/*Chamei o console, para imprimir o resultado*/