#Crie uma função que recebe um vetor de números reais como entrada e retorna a média dos valores contidos no vetor.

def soma_vetor(vetor): # Função que recebe um vetor de números reais como entrada e retorna a média dos valores contidos no vetor.
    soma = 0 # Variável que armazena a soma dos valores do vetor.
    for i in range(len(vetor)): # Laço de repetição que percorre todos os elementos do vetor.
        soma += vetor[i] # Soma o elemento do vetor na variável soma.
    return soma / len(vetor) # Retorna a média dos valores do vetor.

vetor = [10,10]

print(soma_vetor(vetor))
