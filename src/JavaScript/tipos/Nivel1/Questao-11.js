/* Livro */

// Define uma classe chamada "Livros" para representar informações sobre livros,
// incluindo título, autor, ano de publicação, editora, preço e número de páginas.
class Livros {
    constructor(titulo, autor, ano, editora, preco, paginas) {
        this.titulo = titulo;       // Inicializa o título do livro com o valor passado como argumento.
        this.autor = autor;         // Inicializa o autor do livro com o valor passado como argumento.
        this.ano = ano;             // Inicializa o ano de publicação do livro com o valor passado como argumento.
        this.editora = editora;     // Inicializa a editora do livro com o valor passado como argumento.
        this.preco = preco;         // Inicializa o preço do livro com o valor passado como argumento.
        this.paginas = paginas;     // Inicializa o número de páginas do livro com o valor passado como argumento.
    }
}

// Define uma função chamada "compararAutores" que recebe dois objetos "livro1" e "livro2".
function compararAutores(livro1, livro2) {
    if (livro1.autor === livro2.autor) {
        console.log("Os livros são do mesmo autor"); // Imprime uma mensagem se os autores dos livros forem iguais.
    } else {
        console.log("Os livros são de autores diferentes"); // Imprime uma mensagem se os autores dos livros forem diferentes.
    }
}

// Cria dois objetos "livro1" e "livro2" da classe "Livros" com informações específicas.
let livro1 = new Livros("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Allen & Unwin", 50, 1178);
let livro2 = new Livros("O Hobbit", "J.R.R. Tolkien", 1937, "Allen & Unwin", 30, 310);

// Chama a função "compararAutores" com os objetos "livro1" e "livro2" como argumentos
// e imprime uma mensagem indicando se os livros têm o mesmo autor ou autores diferentes.
compararAutores(livro1, livro2);  // Imprime "Os livros são do mesmo autor" neste caso.
