# Crie um programa que calcula a média de valores em um vetor de números reais.

def mediaVetor(vetor):  # Função que recebe um vetor e retorna a média dos valores
    soma = 0           # Variável que vai receber a soma dos valores do vetor
    for i in range (len(vetor)): # Loop que vai percorrer o vetor
        soma += vetor[i] # Soma dos valores do vetor
    return soma / len(vetor) # Retorno da média dos valores do vetor
    
print(mediaVetor([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
