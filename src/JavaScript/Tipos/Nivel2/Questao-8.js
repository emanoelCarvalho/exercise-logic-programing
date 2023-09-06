/* Lista de Jogos eletrônicos */ 


class JogosEletronicos {
    constructor(nome, ano, genero, console, desenvolvedores) {
        this.nome = nome;
        this.ano = ano;
        this.genero = genero;
        this.console = console;
        this.desenvolvedores = desenvolvedores;
    }
}


let listaDeJogos = new JogosEletronicos("God of War", 2018, "Ação", "Playstation 4", ["Santa Monica Studio", "Sony Interactive Entertainment"]);
let listaDeJogos2 = new JogosEletronicos("The Last of Us", 2013, "Ação", "Playstation 4", ["Naughty Dog", "Sony Interactive Entertainment"]);


function peloMenosUmDesenvolvedorIgual (listaDeJogos, listaDeJogos2) {
    for (let i = 0; i < listaDeJogos.desenvolvedores.length; i++) {
        for (let j = 0; j < listaDeJogos2.desenvolvedores.length; j++) {
            if (listaDeJogos.desenvolvedores[i] === listaDeJogos2.desenvolvedores[j]) {
                console.log("Pelo menos um desenvolvedor é igual");
                return;
            }
        }
    }
    console.log("Nenhum desenvolvedor é igual");
}

peloMenosUmDesenvolvedorIgual(listaDeJogos, listaDeJogos2);