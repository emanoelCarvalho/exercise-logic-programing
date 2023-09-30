#Implemente um programa que recebe um vetor de números inteiros e determina a frequência de cada elemento no vetor, criando um novo vetor com as frequências correspondentes.

def frequenciaDeElementos(vetor, numero): # Função que recebe um vetor e um número e retorna a frequência do número no vetor
    frequencia = 0 # Variável que vai receber a frequência do número no vetor
    for i in range(len(vetor)): # Loop que vai percorrer o vetor
        if vetor[i] == numero: # Verifica se o valor atual do vetor é igual ao número
            frequencia += 1 # Se for, a frequência recebe mais um
    return frequencia # Retorno da frequência do número no vetor


print(frequenciaDeElementos([1, 1, 3, 4, 5, 6, 7, 8, 9, 10], 1))

