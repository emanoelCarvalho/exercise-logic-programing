/*Filme*/

class Filme {
  constructor(titulo, ano, diretor) {
    this.titulo = titulo;
    this.ano = ano;
    this.diretor = diretor;
  }
}

function compararAnosDosFilmes(filme1, filme2) {
  if (filme1.ano < filme2.ano) {
    return filme1;
  } else {
    return filme2;
  }
}

let filme1 = new Filme("O Poderoso Chefão", 1972, "Francis Ford Coppola");
let filme2 = new Filme("O Poderoso Chefão II", 1974, "Francis Ford Coppola");

console.log(compararAnosDosFilmes(filme1, filme2));
