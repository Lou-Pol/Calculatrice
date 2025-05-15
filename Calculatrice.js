function additionner(a, b) {
    return a + b;
}

function soustraire(a, b) {
    return a - b;
}

function multiplier(a, b) {
    return a * b;
}

function diviser(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro");
    }
    return a / b;
}

function valAbs(a) {
    return Math.abs(a);
}

function puissance(a, b) {
    return Math.pow(a, b);
}

function calculer() {
    let quitter = false;
    while (!quitter) {
        let choix = prompt("Menu :\n1. Faire une opération\n2. Quitter\nChoisissez une option :");

        if (choix === "1") {
            let oper = prompt("Choisissez une opération (+, -, *, /, ^, abs) :");

            let nb1, nb2, res;
            try {
                if (oper !== "abs") {
                    nb1 = parseFloat(prompt("Entrez le premier nombre :"));
                    nb2 = parseFloat(prompt("Entrez le deuxième nombre :"));
                } else {
                    nb1 = parseFloat(prompt("Entrez un nombre :"));
                }

                switch (oper) {
                    case "+":
                        res = additionner(nb1, nb2);
                        break;
                    case "-":
                        res = soustraire(nb1, nb2);
                        break;
                    case "*":
                        res = multiplier(nb1, nb2);
                        break;
                    case "/":
                        res = diviser(nb1, nb2);
                        break;
                    case "^":
                        res = puissance(nb1, nb2);
                        break;
                    case "abs":
                        res = valAbs(nb1);
                        break;
                    default:
                        alert("L'opération n'est pas valide");
                        continue;
                }

                alert("Résultat : " + res);
            } catch (error) {
                alert("Erreur : " + error.message);
            }
        } else if (choix === "2") {
            quitter = true;
        } else {
            alert("Option invalide");
        }
    }

    alert("Au revoir");
}

// Lancer la calculatrice
calculer();