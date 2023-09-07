/*Dado o nome de um dos integrantes da sua sala, imprimir o sobrenome da pessoa (ao menos 3 pessoas).*/

let nome = 'Placido';
let sobrenome;

// Use uma estrutura switch-case para lidar com diferentes nomes e atribuir o sobrenome correspondente.
switch (nome) {
    case 'Emanoel':
        sobrenome = nome + ' Carvalho'; // Se 'nome' for igual a 'Emanoel', atribui 'Emanoel Carvalho' a 'sobrenome'.
        break; // Encerra o caso 'Emanoel'.
    case 'Cleiton':
        sobrenome = nome + ' Lucas'; // Se 'nome' for igual a 'Cleiton', atribui 'Cleiton Lucas' a 'sobrenome'.
        break; // Encerra o caso 'Cleiton'.
    case 'Placido':
        sobrenome = nome + ' Lima'; // Se 'nome' for igual a 'Placido', atribui 'Placido Lima' a 'sobrenome'.
        break; // Encerra o caso 'Placido'.
    case 'Alef':
        sobrenome = nome + ' Thiago'; // Se 'nome' for igual a 'Alef', atribui 'Alef Thiago' a 'sobrenome'.
        break; // Encerra o caso 'Alef'.
}

// Imprime o sobrenome resultante no console.
console.log(sobrenome);
