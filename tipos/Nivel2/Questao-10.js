/* Lista de Pacientes de um hospital */


class Pacientes {
    constructor(nome, idade, peso, altura, doenca, medicamentos) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.doenca = doenca;
        this.medicamentos = medicamentos;
    }
}

let paciente1 = new Pacientes("João", 20, 80, 1.80, "Gripe", ["Dipirona", "Paracetamol"]);
let paciente2 = new Pacientes("Maria", 25, 60, 1.60, "Gripe", ["Dipirona", "Paracetamol"]);

function qunatosPacientesEstaoTomandoDipirona (paciente1, paciente2) {
    let contador = 0;
    for (let i = 0; i < paciente1.medicamentos.length; i++) {
        if (paciente1.medicamentos[i] === "Dipirona") {
            contador++;
        }
    }
    for (let i = 0; i < paciente2.medicamentos.length; i++) {
        if (paciente2.medicamentos[i] === "Dipirona") {
            contador++;
        }
    }
    return contador;
}

console.log(qunatosPacientesEstaoTomandoDipirona(paciente1, paciente2));
