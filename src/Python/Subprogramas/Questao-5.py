#Escreva uma função, que dada uma string, conta quantas vezes uma vogal, se repete 

def contar_vogais(str, vogal): # Função que recebe uma string e conta quantas vezes uma vogal se repete.
    cont = 0 # Variável que armazena a quantidade de vezes que a vogal se repete.
    for i in range(len(str)): # Laço de repetição que percorre todos os elementos da string.
            if (str[i] == vogal) :  # Condição que verifica se o elemento da string é igual a vogal.
                cont += 1 # Incrementa a variável cont.
    return cont # Retorna a quantidade de vezes que a vogal se repete.


str = "aeiau"
vogal = 'e'

print(contar_vogais(str, vogal))