# Implemente uma função que verifica se uma palavra ou frase fornecida como entrada é um palíndromo (ou seja, lê-se igual de trás para frente), ignorando espaços e diferenciação de maiúsculas e minúsculas.

def verificar_palindromo(str): 
    str = str.lower() # Transforma todas as letras da string em minúsculas.
    str = str.replace(" ", "") # Remove os espaços da string.
    if str == str[::-1]: # Verifica se a string é igual a ela mesma invertida.
        return True # Retorna True.
    else: 
        return False # Retorna False.
    
str = "Ovo"

print(verificar_palindromo(str))