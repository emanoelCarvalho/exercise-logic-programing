/* Lista de Pacientes de um hospital */

// Define uma classe chamada "Pacientes" para representar informações sobre pacientes de um hospital,
// incluindo nome, idade, peso, altura, doença e medicamentos.
class Pacientes {
    constructor(nome, idade, peso, altura, doenca, medicamentos) {
        this.nome = nome;                   // Inicializa o nome do paciente com o valor passado como argumento.
        this.idade = idade;                 // Inicializa a idade do paciente com o valor passado como argumento.
        this.peso = peso;                   // Inicializa o peso do paciente com o valor passado como argumento.
        this.altura = altura;               // Inicializa a altura do paciente com o valor passado como argumento.
        this.doenca = doenca;               // Inicializa a doença do paciente com o valor passado como argumento.
        this.medicamentos = medicamentos;   // Inicializa a lista de medicamentos do paciente com o valor passado como argumento.
    }
}

// Cria dois objetos "paciente1" e "paciente2" da classe "Pacientes"
// com informações específicas sobre pacientes de um hospital, incluindo nome, idade, peso, altura, doença e lista de medicamentos.
let paciente1 = new Pacientes("João", 20, 80, 1.80, "Gripe", ["Dipirona", "Paracetamol"]);
let paciente2 = new Pacientes("Maria", 25, 60, 1.60, "Gripe", ["Dipirona", "Paracetamol"]);

// Define uma função chamada "qunatosPacientesEstaoTomandoDipirona" que recebe dois objetos "paciente1" e "paciente2".
function qunatosPacientesEstaoTomandoDipirona(paciente1, paciente2) {
    let contador = 0;
    
    // Itera sobre a lista de medicamentos do primeiro paciente.
    for (let i = 0; i < paciente1.medicamentos.length; i++) {
        if (paciente1.medicamentos[i] === "Dipirona") {
            contador++;
        }
    }
    
    // Itera sobre a lista de medicamentos do segundo paciente.
    for (let i = 0; i < paciente2.medicamentos.length; i++) {
        if (paciente2.medicamentos[i] === "Dipirona") {
            contador++;
        }
    }
    
    return contador;
}

// Chama a função "qunatosPacientesEstaoTomandoDipirona" com os objetos "paciente1" e "paciente2" como argumentos
// para contar quantos pacientes estão tomando Dipirona e imprime o resultado.
console.log(qunatosPacientesEstaoTomandoDipirona(paciente1, paciente2)); // Imprime a quantidade de pacientes que estão tomando Dipirona.
