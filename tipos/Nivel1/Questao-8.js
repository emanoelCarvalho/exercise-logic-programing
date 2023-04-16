/*Jogo eletrônico */

class JogoEletronico {
    constructor(nome, preco, anoLancamento, genero, produtora, plataforma) {
        this.nome = nome;
        this.preco = preco;
        this.anoLancamento = anoLancamento;
        this.genero = genero;
        this.produtora = produtora;
        this.plataforma = plataforma;
    }
}

let jogo = () => {
    let jogo = new JogoEletronico("GTA", 200, 2010, "Ação", "Rockstar", "PS4");
    return jogo;
}

console.log(jogo());