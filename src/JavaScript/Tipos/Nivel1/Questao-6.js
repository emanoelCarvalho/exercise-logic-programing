/*Fogão*/

// Define uma classe chamada "Fogao" para representar informações sobre um fogão, incluindo marca, modelo e ano.
class Fogao {
  constructor(marca, modelo, ano) {
    this.marca = marca;     // Inicializa a marca do fogão com o valor passado como argumento.
    this.modelo = modelo;   // Inicializa o modelo do fogão com o valor passado como argumento.
    this.ano = ano;         // Inicializa o ano do fogão com o valor passado como argumento.
  }
}

// Define uma função chamada "pegarMarcaDoFogao" que recebe um objeto "fogao".
function pegarMarcaDoFogao(fogao) {
  return fogao.marca;      // Retorna a marca do fogão.
}

// Cria um objeto "fogao" da classe "Fogao" com a marca "Brastemp", modelo "BRE80" e ano 2010.
let fogao = new Fogao("Brastemp", "BRE80", 2010);

// Chama a função "pegarMarcaDoFogao" com o objeto "fogao" como argumento e imprime a marca do fogão no console.
console.log(pegarMarcaDoFogao(fogao));  // Imprime a marca do fogão, que é "Brastemp".
