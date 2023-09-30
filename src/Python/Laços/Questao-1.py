# Escreva um programa onde dado um numero, se é impresso a tabuada desse numero.

numero = int(input("Digite um numero: ")) # Recebe o numero que será calculado a tabuada
for i in range(1, 11): # Loop que vai de 1 até 10
    print(f"{numero} x {i} = {numero * i}") # Imprime a tabuada do numero

