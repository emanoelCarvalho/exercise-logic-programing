#Escreva um programa que remove todas as duplicatas de um array bidimensional de números inteiros, deixando apenas os valores únicos.

array = [[1, 2, 3], [4, 5, 6], [7, 8, 8, 9]] # Array bidimensional
unicos = [] # Array que vai armazenar os elementos unicos do array

def removerDuplicatas(array) : # Função que recebe um array e remove as duplicatas
    for i in array : # Para cada elemento do array
        for j in i : # Para cada elemento do array dentro do array
            if (j not in unicos) : # Se o elemento atual não estiver no array de elementos unicos
                unicos.append(j) # Adiciona o elemento atual ao array de elementos unicos

removerDuplicatas(array) # Remove as duplicatas do array

print(unicos) # Imprime o array de elementos unicos