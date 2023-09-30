# Escreva um programa que cria um array bidimensional, de números inteiros e calcula a soma de todos os elementos no array.
 
array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] # Array bidimensional
soma = 0 # Variavel que vai armazenar a soma dos elementos do array

for i in array : # Para cada elemento do array
    for j in i : # Para cada elemento do array dentro do array
        soma += j # Soma o elemento atual ao valor da soma

print(soma) # Imprime a soma dos elementos do array
