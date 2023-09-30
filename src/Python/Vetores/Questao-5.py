#Crie um programa que ordena um vetor de números inteiros em ordem crescente ou decrescente.

def ordenaVetor(vetor, ordem): # Função que recebe um vetor e a ordem de ordenação e retorna o vetor ordenado
    if ordem == "crescente": # Verifica se a ordem é crescente
        for i in range(len(vetor)): # Loop que vai percorrer o vetor
            for j in range(len(vetor)): # Loop que vai percorrer o vetor
                if vetor[i] < vetor[j]: # Verifica se o valor atual do vetor é menor que o valor atual do vetor
                    aux = vetor[i] # Variável auxiliar que recebe o valor atual do vetor
                    vetor[i] = vetor[j] # O valor atual do vetor recebe o valor atual do vetor
                    vetor[j] = aux # O valor atual do vetor recebe o valor atual do vetor
    elif ordem == "decrescente": # Verifica se a ordem é decrescente
        for i in range(len(vetor)): # Loop que vai percorrer o vetor
            for j in range(len(vetor)): # Loop que vai percorrer o vetor
                if vetor[i] > vetor[j]: # Verifica se o valor atual do vetor é maior que o valor atual do vetor
                    aux = vetor[i] # Variável auxiliar que recebe o valor atual do vetor
                    vetor[i] = vetor[j] # O valor atual do vetor recebe o valor atual do vetor
                    vetor[j] = aux # O valor atual do vetor recebe o valor atual do vetor
    return vetor # Retorno do vetor ordenado