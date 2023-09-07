/* Paciente de um hospital */

// Define uma classe chamada "PacienteDeHospital" para representar informações sobre um paciente de hospital,
// incluindo nome, idade, peso e altura.
class PacienteDeHospital {
    constructor(nome, idade, peso, altura) {
        this.nome = nome;       // Inicializa o nome do paciente com o valor passado como argumento.
        this.idade = idade;     // Inicializa a idade do paciente com o valor passado como argumento.
        this.peso = peso;       // Inicializa o peso do paciente com o valor passado como argumento.
        this.altura = altura;   // Inicializa a altura do paciente com o valor passado como argumento.
    }
}

// Define uma função chamada "falarSintomas" que recebe um objeto "paciente".
function falarSintomas(paciente) {
    return paciente.nome + " está com sintomas de gripe."; // Retorna uma mensagem com o nome do paciente.
}

// Cria um objeto "paciente" da classe "PacienteDeHospital" com informações específicas,
// incluindo nome "João", idade 20, peso 80 e altura 1.80.
let paciente = new PacienteDeHospital("João", 20, 80, 1.80);

// Chama a função "falarSintomas" com o objeto "paciente" como argumento
// e imprime uma mensagem com o nome do paciente no console.
console.log(falarSintomas(paciente));  // Imprime uma mensagem com o nome do paciente e os sintomas de gripe.
