// Lista de Livros

class Livros {
    constructor(nome, autor, ano, editora, genero, paginas, personagens) {
        this.nome = nome;
        this.autor = autor;
        this.ano = ano;
        this.editora = editora;
        this.genero = genero;
        this.paginas = paginas;
        this.personagens = personagens;
    }
}

let livro1 = new Livros("Harry Potter e a Pedra Filosofal", "J.K. Rowling", 1997, "Rocco", "Fantasia", 223, ["Harry Potter", "Ronald Weasley", "Hermione Granger"]);
let livro2 = new Livros("Harry Potter e a Câmara Secreta", "J.K. Rowling", 1998, "Rocco", "Fantasia", 251, ["Harry Potter", "Tom Ridlle", "Alvo Dumbledore"]);

function quantasVezesUmPersonagemAparece (livro1, livro2, personagem) {
    let contador = 0;
    for (let i = 0; i < livro1.personagens.length; i++) {
        if (livro1.personagens[i] === personagem) {
            contador++;
        }
    }

    for (let i = 0; i < livro2.personagens.length; i++) {

        if (livro2.personagens[i] === personagem) {
            contador++;
        }
    }

    console.log('O personagem ' + personagem + ' aparece ' + contador + ' vezes nos livros ' + livro1.nome + ' e ' + livro2.nome);
}

quantasVezesUmPersonagemAparece(livro1, livro2, "Harry Potter");