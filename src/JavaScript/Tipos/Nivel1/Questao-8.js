/*Jogo eletrônico */

// Define uma classe chamada "JogoEletronico" para representar informações sobre um jogo eletrônico,
// incluindo nome, preço, ano de lançamento, gênero, produtora e plataforma.
class JogoEletronico {
    constructor(nome, preco, anoLancamento, genero, produtora, plataforma) {
        this.nome = nome;                     // Inicializa o nome do jogo com o valor passado como argumento.
        this.preco = preco;                   // Inicializa o preço do jogo com o valor passado como argumento.
        this.anoLancamento = anoLancamento;   // Inicializa o ano de lançamento do jogo com o valor passado como argumento.
        this.genero = genero;                 // Inicializa o gênero do jogo com o valor passado como argumento.
        this.produtora = produtora;           // Inicializa a produtora do jogo com o valor passado como argumento.
        this.plataforma = plataforma;         // Inicializa a plataforma do jogo com o valor passado como argumento.
    }
}

// Define uma função anônima chamada "jogo" que cria e retorna um objeto da classe "JogoEletronico"
// com valores específicos para o nome, preço, ano de lançamento, gênero, produtora e plataforma.
let jogo = () => {
    let jogo = new JogoEletronico("GTA", 200, 2010, "Ação", "Rockstar", "PS4");
    return jogo;
}

// Chama a função "jogo" para criar um objeto representando o jogo e imprime esse objeto no console.
console.log(jogo());  // Imprime o objeto criado representando o jogo "GTA".
