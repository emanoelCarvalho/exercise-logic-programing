/* Lista de Filmes*/

class ListaDeFilmes {
    constructor (nome, genero, ano, diretor, atores, duracao) {
        this.nome = nome;
        this.genero = genero;
        this.ano = ano;
        this.diretor = diretor;
        this.atores = atores;
        this.duracao = duracao;
    }
}

let listaDeFilmes = new ListaDeFilmes("O Senhor dos Anéis", "Fantasia", 2001, "Peter Jackson", ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"], 178);

function retornarAtores(listaDeFilmes) {
    return listaDeFilmes.atores;
}

console.log(retornarAtores(listaDeFilmes));