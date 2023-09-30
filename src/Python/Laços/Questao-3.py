# Implemente um programa que solicita ao usuário um número inteiro positivo e, em seguida, calcula o fatorial desse número usando um loop.

numero = int(input("Digite um numero: ")) # Recebe o numero que será calculado o fatorial
fatorial = 1 # Variavel que vai armazenar o fatorial do numero
for i in range(1, numero + 1) : # Loop que vai de 1 até o numero
    fatorial *= i # Calcula o fatorial do numero
print(f"O fatorial de {numero} é = {fatorial}") # Imprime o fatorial do numero

