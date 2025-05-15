// Récupération des éléments HTML
const btn = document.getElementById("calculer");
const resultat = document.getElementById("resultat");

// Ajout de l'événement au clic
btn.addEventListener("click", function () {
  const nb1 = parseFloat(document.getElementById("nombre1").value);
  const nb2 = parseFloat(document.getElementById("nombre2").value);
  const oper = document.getElementById("operation").value;

  let res;
  switch (oper) {
    case "+":
      res = nb1 + nb2;
      break;
    case "-":
      res = nb1 - nb2;
      break;
    case "*":
      res = nb1 * nb2;
      break;
    case "/":
      res = nb2 !== 0 ? nb1 / nb2 : "Erreur : division par 0";
      break;
    default:
      res = "Opération inconnue";
  }

  resultat.textContent = "Résultat: " + res;
});