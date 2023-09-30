#Desenvolva um programa que solicita ao usuário seu peso e altura e calcula o IMC. Com base no IMC calculado, o programa deve exibir uma
# mensagem indicando se a pessoa está abaixo do peso, com peso normal, com sobrepeso, obesa, etc.

peso = float(input("Digite seu peso: ")) # Recebe o peso do usuario
altura = float(input("Digite sua altura: ")) # Recebe a altura do usuario

imc = (peso / (altura ** 2)) # Calcula o IMC

if (imc < 18.5) : # Se o IMC for menor que 18.5
    print('Abaixo do peso') # Imprime que o usuario está abaixo do peso
elif (imc >= 18.5 and imc < 25) : # Se o IMC for maior ou igual a 18.5 e menor que 25
    print('Peso normal') # Imprime que o usuario está com o peso normal
else : # Se o IMC for maior ou igual a 25
    print('Acima do peso') # Imprime que o usuario está acima do peso