/*Filme*/

// Define uma classe chamada "Filme" para representar informações sobre filmes.
class Filme {
  constructor(titulo, ano, diretor) {
    this.titulo = titulo;     // Atribui o título do filme ao objeto.
    this.ano = ano;           // Atribui o ano de lançamento do filme ao objeto.
    this.diretor = diretor;   // Atribui o diretor do filme ao objeto.
  }
}

// Define uma função chamada "compararAnosDosFilmes" para comparar dois filmes com base em seus anos de lançamento.
function compararAnosDosFilmes(filme1, filme2) {
  if (filme1.ano < filme2.ano) {
    return filme1;  // Retorna o filme1 se o ano de lançamento for menor.
  } else {
    return filme2;  // Caso contrário, retorna o filme2.
  }
}

// Cria dois objetos Filme com informações diferentes.
let filme1 = new Filme("O Poderoso Chefão", 1972, "Francis Ford Coppola");
let filme2 = new Filme("O Poderoso Chefão II", 1974, "Francis Ford Coppola");

// Chama a função compararAnosDosFilmes com os filmes e imprime o resultado.
console.log(compararAnosDosFilmes(filme1, filme2));
