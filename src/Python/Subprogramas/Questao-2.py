# Escreva uma função recursiva que calcula o fatorial de um número inteiro não negativo fornecido como entrada.

def fatorial(numero): # Função que calcula o fatorial de um número inteiro não negativo fornecido como entrada.
    if (numero == 1) : # Condição que verifica se o número é igual a 1.
        return 1 # Retorna 1.
    else : 
        return numero * fatorial(numero - 1) # Retorna o número multiplicado pelo fatorial do número - 1.
    
numero = 1

print(fatorial(numero))