/* Paciente de um hospital*/

class PacienteDeHospital {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
}

function falarSintomas(paciente) {
    return paciente.nome + " está com sintomas de gripe.";
}

let paciente = new PacienteDeHospital("João", 20, 80, 1.80);
console.log(falarSintomas(paciente));