/*Traduzir os pronomes (I, you, he, she, it, we e they) do Inglês para o Português;*/

// Defina o texto que você deseja traduzir (pronomes em inglês).
let pronomes = 'you';

// Declare uma variável para armazenar a tradução.
let tradutor;

// Use uma estrutura switch-case para lidar com diferentes pronomes.
switch (pronomes) {
    case 'I':
        tradutor = 'Eu'; // Se 'pronomes' for igual a 'I', atribua 'Eu' a 'tradutor'.
        break; // Encerra o caso 'I'.
    case 'you':
        tradutor = 'Você'; // Se 'pronomes' for igual a 'you', atribua 'Você' a 'tradutor'.
        break; // Encerra o caso 'you'.
    case 'he':
        tradutor = 'Ele'; // Se 'pronomes' for igual a 'he', atribua 'Ele' a 'tradutor'.
        break; // Encerra o caso 'he'.
    case 'she':
        tradutor = 'Ela'; // Se 'pronomes' for igual a 'she', atribua 'Ela' a 'tradutor'.
        break; // Encerra o caso 'she'.
    case 'it':
        tradutor = 'Ele/Ela'; // Se 'pronomes' for igual a 'it', atribua 'Ele/Ela' a 'tradutor'.
        break; // Encerra o caso 'it'.
    case 'we':
        tradutor = 'Nós'; // Se 'pronomes' for igual a 'we', atribua 'Nós' a 'tradutor'.
        break; // Encerra o caso 'we'.
    case 'they':
        tradutor = 'Eles/Elas'; // Se 'pronomes' for igual a 'they', atribua 'Eles/Elas' a 'tradutor'.
        break; // Encerra o caso 'they'.
}

// Imprima a tradução resultante no console.
console.log(tradutor);
