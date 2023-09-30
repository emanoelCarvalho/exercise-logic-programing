#Faça um programa que dado um dia da semana, determini se é dia de semana, final de semana ou dia inválido.

dia = input("Digite um dia da semana: ") # Recebe o dia da semana

if (dia == "segunda" or dia == "terça" or dia == "quarta" or dia == "quinta" or dia == "sexta") : # Se o dia for segunda, terça, quarta, quinta ou sexta
    print("Dia de semana") # Imprime que é dia de semana
elif (dia == "sábado" or dia == "domingo") :
    print("Final de semana")
else :
    print("Dia inválido")