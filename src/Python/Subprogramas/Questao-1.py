#Crie uma função que recebe um número inteiro positivo como entrada e retorna a soma de todos os números pares de 1 até o número informado.

def soma_numeros_pares(numero): # Função que recebe um número inteiro positivo como entrada e retorna a soma de todos os números pares de 1 até o número informado.
    soma = 0 # Variável que armazena a soma dos números pares.
    for i in range(1, numero + 1):  # Laço de repetição que percorre todos os números de 1 até o número informado.
        if i % 2 == 0: # Condição que verifica se o número é par.
            soma += i # Soma o número par na variável soma.
    return soma # Retorna a soma dos números pares.

numero = 10

print(soma_numeros_pares(numero))