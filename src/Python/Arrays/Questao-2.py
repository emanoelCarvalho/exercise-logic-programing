# Crie um programa que encontra e exibe o maior valor em um array bidimensional de números inteiros.

def maior(array) : # Função que recebe um array e retorna o maior elemento
    maior = array[0][0] # Variavel que vai armazenar o maior elemento do array
    for i in array : # Para cada elemento do array
        for j in i : # Para cada elemento do array dentro do array
            if (j > maior) : # Se o elemento atual for maior que o maior elemento
                maior = j # Atualiza o maior elemento
    return maior # Retorna o maior elemento

array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(maior(array))
