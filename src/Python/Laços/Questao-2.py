#Crie um programa que calcula a soma de todos os números ímpares de 1 a 100 usando um loop.

soma = 0 # Variavel que vai armazenar a soma dos numeros impares
for i in range(1, 101) : # Loop que vai de 1 até 100
    if i % 2 != 0 : # Se o numero for impar
        soma += i # Soma o numero a variavel soma

print(f"A soma dos numeros impares de 1 a 100 é = {soma}") # Imprime a soma dos numeros impares