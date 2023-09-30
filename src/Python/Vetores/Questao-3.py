# Escreva um programa que encontra o maior e o menor valor em um vetor de números inteiros.

def maior_menor(vetor): # Função que recebe um vetor e retorna o maior e o menor valor
    maior = vetor[0] # Variável que vai receber o maior valor do vetor
    menor = vetor[0] # Variável que vai receber o menor valor do vetor
    for i in range(len(vetor)): # Loop que vai percorrer o vetor
        if vetor[i] > maior: # Verifica se o valor atual do vetor é maior que o maior valor
            maior = vetor[i] # Se for, o maior valor recebe o valor atual do vetor
        elif vetor[i] < menor: # Verifica se o valor atual do vetor é menor que o menor valor
            menor = vetor[i] # Se for, o menor valor recebe o valor atual do vetor
    return menor, maior # Retorno do menor e do maior valor do vetor

print(maior_menor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))