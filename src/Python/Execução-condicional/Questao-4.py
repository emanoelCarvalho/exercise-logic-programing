# Implemente um programa que verifica se um número inteiro fornecido pelo usuário é primo ou não. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.

numero = int(input("Digite um numero: ")) # Recebe o numero que será verificado se é primo ou não
divisores = 0 # Variavel que vai armazenar a quantidade de divisores do numero

for i in range(1, numero + 1) : # Para cada numero de 1 até o numero digitado pelo usuario
    if (numero % i == 0) : # Se o numero for divisivel pelo numero atual
        divisores += 1 # Incrementa a quantidade de divisores

if (divisores == 2) : # Se o numero tiver apenas dois divisores
    print("O numero é primo") # Imprime que o numero é primo
else :
    print("O numero não é primo")
    