// Affichage du menu
print("Bienvenue dans la calculatrice !")
print("Choisissez une opération :")
print("1 : Addition (+)")
print("2 : Soustraction (-)")
print("3 : Multiplication (*)")
print("4 : Division (/)")

//Lecture du choix de l'utilisateur
choix = input("Entrez le numéro de l'opération (1 à 4) : ")

//Saisie des deux nombres
a = float(input("Entrez le premier nombre : "))
b = float(input("Entrez le deuxième nombre : "))

//Calcul selon le choix
if choix == "1":
    resultat = a + b
    print("Résultat :", resultat)

elif choix == "2":
    resultat = a - b
    print("Résultat :", resultat)

elif choix == "3":
    resultat = a * b
    print("Résultat :", resultat)

elif choix == "4":
    if b != 0:
        resultat = a / b
        print("Résultat :", resultat)
    else:
        print("Erreur : division par zéro !")

else:
    print("Erreur : choix invalide.")


