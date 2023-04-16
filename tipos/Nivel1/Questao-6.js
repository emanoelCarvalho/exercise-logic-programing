/*Fogão */

class Fogao {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
  }
}

function pegarMarcaDoFogao(fogao) {
  return fogao.marca;
}

console.log(pegarMarcaDoFogao(new Fogao("Brastemp", "BRE80", 2010)));