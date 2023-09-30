#Crie um programa que calcula a soma de todos os números primos no intervalo de 1 a 100 usando loops aninhados para verificar a primalidade de cada número.

soma = 0 # Variavel que vai armazenar a soma dos numeros primos

for i in range(1, 101) : # Loop que vai de 1 até 100
    primo = True # Variavel que vai armazenar se o numero é primo ou não
    for j in range(2, i) : # Loop que vai de 2 até o numero
        if i % j == 0 : # Se o numero for divisivel por outro numero
            primo = False # O numero não é primo
            break # Sai do loop
    if primo : # Se o numero for primo
        soma += i # Soma o numero a variavel soma

print(f"A soma dos numeros primos de 1 a 100 é = {soma}") # Imprime a soma dos numeros primos