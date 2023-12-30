/* Lista de Filmes */

// Define uma classe chamada "ListaDeFilmes" para representar informações sobre filmes,
// incluindo nome, gênero, ano de lançamento, diretor, lista de atores e duração.
class ListaDeFilmes {
    constructor(nome, genero, ano, diretor, atores, duracao) {
        this.nome = nome;                 // Inicializa o nome do filme com o valor passado como argumento.
        this.genero = genero;             // Inicializa o gênero do filme com o valor passado como argumento.
        this.ano = ano;                   // Inicializa o ano de lançamento do filme com o valor passado como argumento.
        this.diretor = diretor;           // Inicializa o diretor do filme com o valor passado como argumento.
        this.atores = atores;             // Inicializa a lista de atores do filme com o valor passado como argumento.
        this.duracao = duracao;           // Inicializa a duração do filme com o valor passado como argumento.
    }
}

// Cria um objeto "listaDeFilmes" da classe "ListaDeFilmes" com informações específicas sobre um filme.
let listaDeFilmes = new ListaDeFilmes("O Senhor dos Anéis", "Fantasia", 2001, "Peter Jackson", ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"], 178);

// Define uma função chamada "retornarAtores" que recebe um objeto "listaDeFilmes" e retorna a lista de atores do filme.
function retornarAtores(listaDeFilmes) {
    return listaDeFilmes.atores; // Retorna a lista de atores do filme.
}

// Chama a função "retornarAtores" com o objeto "listaDeFilmes" como argumento
// e imprime a lista de atores do filme no console.
console.log(retornarAtores(listaDeFilmes));  // Imprime a lista de atores do filme "O Senhor dos Anéis".
