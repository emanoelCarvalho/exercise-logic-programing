# Faça um programa que retorne quantas vezes um determinado elemento aparece em um array bidimensional de números inteiros.

array = [[1, 1, 3], [4, 5, 6], [7, 8, 9]] # Array bidimensional
elemento = 1 # Elemento que vai ser contado

def contar(array, elemento) : # Função que recebe um array e um elemento e retorna quantas vezes o elemento aparece no array
    contador = 0 # Variavel que vai armazenar o numero de vezes que o elemento aparece no array
    for i in array : # Para cada elemento do array
        for j in i : # Para cada elemento do array dentro do array
            if (j == elemento) : # Se o elemento atual for igual ao elemento
                contador += 1 # Incrementa o contador
    return contador # Retorna o contador

print(contar(array, elemento)) # Imprime o numero de vezes que o elemento aparece no array
