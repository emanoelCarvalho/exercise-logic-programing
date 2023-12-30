// Lista de Livros

// Define uma classe chamada "Livros" para representar informações sobre livros,
// incluindo nome, autor, ano, editora, gênero, número de páginas e lista de personagens.
class Livros {
    constructor(nome, autor, ano, editora, genero, paginas, personagens) {
        this.nome = nome;                   // Inicializa o nome do livro com o valor passado como argumento.
        this.autor = autor;                 // Inicializa o autor do livro com o valor passado como argumento.
        this.ano = ano;                     // Inicializa o ano de publicação do livro com o valor passado como argumento.
        this.editora = editora;             // Inicializa a editora do livro com o valor passado como argumento.
        this.genero = genero;               // Inicializa o gênero do livro com o valor passado como argumento.
        this.paginas = paginas;             // Inicializa o número de páginas do livro com o valor passado como argumento.
        this.personagens = personagens;     // Inicializa a lista de personagens do livro com o valor passado como argumento.
    }
}

// Cria dois objetos "livro1" e "livro2" da classe "Livros"
// com informações específicas sobre livros, incluindo nome, autor, ano, editora, gênero, número de páginas e lista de personagens.
let livro1 = new Livros("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997, "Rocco", "Fantasia", 223, ["Harry Potter", "Ronald Weasley", "Hermione Granger"]);
let livro2 = new Livros("Harry Potter e a Câmara Secreta", "J.K. Rowling", 1998, "Rocco", "Fantasia", 251, ["Harry Potter", "Tom Riddle", "Alvo Dumbledore"]);

// Define uma função chamada "quantasVezesUmPersonagemAparece" que recebe dois objetos "livro1" e "livro2" e um personagem como argumento.
function quantasVezesUmPersonagemAparece(livro1, livro2, personagem) {
    let contador = 0;

    // Itera sobre a lista de personagens do primeiro livro.
    for (let i = 0; i < livro1.personagens.length; i++) {
        if (livro1.personagens[i] === personagem) {
            contador++;
        }
    }

    // Itera sobre a lista de personagens do segundo livro.
    for (let i = 0; i < livro2.personagens.length; i++) {
        if (livro2.personagens[i] === personagem) {
            contador++;
        }
    }

    // Imprime a contagem de quantas vezes o personagem aparece nos dois livros.
    console.log('O personagem ' + personagem + ' aparece ' + contador + ' vezes nos livros ' + livro1.nome + ' e ' + livro2.nome);
}

// Chama a função "quantasVezesUmPersonagemAparece" com os objetos "livro1", "livro2" e o nome do personagem como argumentos
// para contar quantas vezes o personagem aparece nos dois livros e imprimir o resultado.
quantasVezesUmPersonagemAparece(livro1, livro2, "Harry Potter"); // Imprime a contagem de vezes que "Harry Potter" aparece nos dois livros.
