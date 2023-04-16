/* Livro*/

class Livros {
    constructor (titulo, autor, ano, editora, preco, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
        this.preco = preco;
        this.paginas = paginas;
    }
}

function compararAutores(livro1, livro2) {
    if (livro1.autor === livro2.autor) {
        console.log("Os livros são do mesmo autor");
    } else {
        console.log("Os livros são de autores diferentes");
    }
}

let livro1 = new Livros("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Allen & Unwin", 50, 1178);
let livro2 = new Livros("O Hobbit", "J.R.R. Tolkien", 1937, "Allen & Unwin", 30, 310);

compararAutores(livro1, livro2);