/* Material esportivo (exemplos: bola, rede, uniforme, etc.)*/

class EquipamentoEsportivo {
  constructor(nome, preco, descricao, esporteDeUso) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
    this.esporteDeUso = esporteDeUso;
  }
}

function equipamentosDoMesmoEsporte(equipamento1, equipamento2) {
  if (equipamento1.esporteDeUso === equipamento2.esporteDeUso) {
    console.log("Os equipamentos são do mesmo esporte");
  } else {
    console.log("Os equipamentos são de esportes diferentes");
  }
}

let equipamento1 = new EquipamentoEsportivo("Bola de Futebol", 100, "Bola de futebol de couro", "Futebol");
let equipamento2 = new EquipamentoEsportivo("Bola de Basquete", 100, "Bola de basquete de borracha", "Basquete");

equipamentosDoMesmoEsporte(equipamento1, equipamento2);