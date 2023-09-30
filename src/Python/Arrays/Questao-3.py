#Faça um programa que encontre o menor, elemento em um array bidimensional de números inteiros.

def menor(array) : # Função que recebe um array e retorna o menor elemento
    menor = array[0][0] # Variavel que vai armazenar o menor elemento do array
    for i in array : # Para cada elemento do array
        for j in i : # Para cada elemento do array dentro do array
            if (j < menor) : # Se o elemento atual for menor que o menor elemento
                menor = j # Atualiza o menor elemento
    return menor # Retorna o menor elemento

array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(menor(array))
