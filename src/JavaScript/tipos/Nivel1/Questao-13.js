/* Material esportivo (exemplos: bola, rede, uniforme, etc.)*/

// Define uma classe chamada "EquipamentoEsportivo" para representar informações sobre equipamentos esportivos,
// incluindo nome, preço, descrição e esporte de uso.
class EquipamentoEsportivo {
  constructor(nome, preco, descricao, esporteDeUso) {
    this.nome = nome;             // Inicializa o nome do equipamento esportivo com o valor passado como argumento.
    this.preco = preco;           // Inicializa o preço do equipamento esportivo com o valor passado como argumento.
    this.descricao = descricao;   // Inicializa a descrição do equipamento esportivo com o valor passado como argumento.
    this.esporteDeUso = esporteDeUso; // Inicializa o esporte de uso do equipamento esportivo com o valor passado como argumento.
  }
}

// Define uma função chamada "equipamentosDoMesmoEsporte" que verifica se dois equipamentos esportivos
// são destinados ao mesmo esporte e imprime uma mensagem correspondente.
function equipamentosDoMesmoEsporte(equipamento1, equipamento2) {
  if (equipamento1.esporteDeUso === equipamento2.esporteDeUso) {
    console.log("Os equipamentos são do mesmo esporte"); // Imprime a mensagem se os equipamentos forem do mesmo esporte.
  } else {
    console.log("Os equipamentos são de esportes diferentes"); // Imprime a mensagem se os equipamentos forem de esportes diferentes.
  }
}

// Cria dois objetos "equipamento1" e "equipamento2" da classe "EquipamentoEsportivo" com informações específicas.
let equipamento1 = new EquipamentoEsportivo("Bola de Futebol", 100, "Bola de futebol de couro", "Futebol");
let equipamento2 = new EquipamentoEsportivo("Bola de Basquete", 100, "Bola de basquete de borracha", "Basquete");

// Chama a função "equipamentosDoMesmoEsporte" com os objetos "equipamento1" e "equipamento2" como argumentos
// e imprime uma mensagem indicando se os equipamentos são do mesmo esporte ou de esportes diferentes.
equipamentosDoMesmoEsporte(equipamento1, equipamento2); // Imprime "Os equipamentos são de esportes diferentes" neste caso.
