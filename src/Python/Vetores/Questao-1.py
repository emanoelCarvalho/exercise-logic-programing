# Escreva um programa que recebe dois vetores de números inteiros do mesmo tamanho e retorna um terceiro vetor que é a soma dos dois vetores de entrada. 


def soma_vetores(vetor1, vetor2): # Função que recebe dois vetores e retorna a soma deles
    vetor3 = []   # Vetor que vai receber a soma dos dois vetores
    for i in range(len(vetor1)): # Loop que vai percorrer os dois vetores
        vetor3 = (vetor1[i] + vetor2[i]) # Soma dos dois vetores
    return vetor3 # Retorno da soma dos dois vetores

print(soma_vetores([1, 2, 3], [4, 5, 6]))