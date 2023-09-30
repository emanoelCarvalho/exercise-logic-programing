# Crie um programa que recebe três números inteiros do usuário e determina qual deles é o maior.

numero1 = int(input("Digite o primeiro numero: ")) # Recebe o primeiro numero
numero2 = int(input("Digite o segundo numero: ")) # Recebe o segundo numero
numero3 = int(input("Digite o terceiro numero: ")) # Recebe o terceiro numero

maior_numero = '' # Variavel que vai armazenar o maior numero

if (numero1 > numero2 and numero1 > numero3) : # Se o primeiro numero for maior que o segundo e o terceiro
    maior_numero = numero1 # O maior numero é o primeiro
elif (numero2 > numero1 and numero2 > numero3) : # Se o segundo numero for maior que o primeiro e o terceiro
    maior_numero = numero2 # O maior numero é o segundo
else : # Se o terceiro numero for maior que o primeiro e o segundo
    maior_numero = numero3

print(f"O maior numero é = {maior_numero}") # Imprime o maior numero