/* Móvel (exemplos: sofá, mesa, etc.)*/

class Sofa {
    constructor(marca, tempoDeUso, cor, preco, material) {
        this.marca = marca;
        this.tempoDeUso = tempoDeUso;
        this.cor = cor;
        this.preco = preco;
        this.material = material;
    }

}

function tempoDeSofa() {
    if (sofa1.tempoDeUso > 5) {
        console.log("Sofa velho");
    } else {
        console.log("Sofa novo");
    }
}

let sofa1 = new Sofa("Sofá", 10, "Preto", 200, "Couro");
tempoDeSofa(sofa1);