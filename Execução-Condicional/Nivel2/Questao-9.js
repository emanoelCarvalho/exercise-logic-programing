/*Traduzir os pronomes (I, you, he, she, it, we e they) do Inglês para o Português;*/

let pronomes = 'you';
let tradutor;

/*Declarei as variáveis*/

switch (pronomes) {
    case 'I':
        tradutor = 'Eu';
        break;
    case 'you':
        tradutor = 'Você';
        break;
    case 'he':
        tradutor = 'Ele';
        break;
    case 'she':
        tradutor = 'Ela';
        break;
    case 'it':
        tradutor = 'Ele/Ela';
        break;
    case 'we':
        tradutor = 'Nós';
        break;
    case 'they':
        tradutor = 'Eles/Elas';
        break;
}
/*Utilizei swicth case, pois, me ajuda a ter uma visualização melhor do código*/

console.log(tradutor);

/*Chamei o console, para imprimir*/