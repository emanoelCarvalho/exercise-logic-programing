/* Lista de Jogos eletrônicos */

// Define uma classe chamada "JogosEletronicos" para representar informações sobre jogos eletrônicos,
// incluindo nome, ano, gênero, console e uma lista de desenvolvedores.
class JogosEletronicos {
    constructor(nome, ano, genero, console, desenvolvedores) {
        this.nome = nome;                 // Inicializa o nome do jogo com o valor passado como argumento.
        this.ano = ano;                   // Inicializa o ano de lançamento do jogo com o valor passado como argumento.
        this.genero = genero;             // Inicializa o gênero do jogo com o valor passado como argumento.
        this.console = console;           // Inicializa o console do jogo com o valor passado como argumento.
        this.desenvolvedores = desenvolvedores; // Inicializa a lista de desenvolvedores do jogo com o valor passado como argumento.
    }
}

// Cria dois objetos "listaDeJogos" e "listaDeJogos2" da classe "JogosEletronicos"
// com informações específicas sobre jogos eletrônicos, incluindo nome, ano, gênero, console e listas de desenvolvedores.
let listaDeJogos = new JogosEletronicos("God of War", 2018, "Ação", "Playstation 4", ["Santa Monica Studio", "Sony Interactive Entertainment"]);
let listaDeJogos2 = new JogosEletronicos("The Last of Us", 2013, "Ação", "Playstation 4", ["Naughty Dog", "Sony Interactive Entertainment"]);

// Define uma função chamada "peloMenosUmDesenvolvedorIgual" que recebe dois objetos "listaDeJogos" e "listaDeJogos2".
function peloMenosUmDesenvolvedorIgual(listaDeJogos, listaDeJogos2) {
    // Itera sobre a lista de desenvolvedores do primeiro jogo.
    for (let i = 0; i < listaDeJogos.desenvolvedores.length; i++) {
        // Itera sobre a lista de desenvolvedores do segundo jogo.
        for (let j = 0; j < listaDeJogos2.desenvolvedores.length; j++) {
            // Compara se pelo menos um desenvolvedor é igual entre os dois jogos.
            if (listaDeJogos.desenvolvedores[i] === listaDeJogos2.desenvolvedores[j]) {
                console.log("Pelo menos um desenvolvedor é igual");
                return;
            }
        }
    }
    console.log("Nenhum desenvolvedor é igual");
}

// Chama a função "peloMenosUmDesenvolvedorIgual" com os objetos "listaDeJogos" e "listaDeJogos2" como argumentos
// para verificar se pelo menos um desenvolvedor é igual entre os dois jogos e imprimir o resultado.
peloMenosUmDesenvolvedorIgual(listaDeJogos, listaDeJogos2); // Imprime se pelo menos um desenvolvedor é igual neste caso.
