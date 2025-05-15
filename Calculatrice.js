// Récup elt html
const btn = document.getElementById("calculer");
const resultat = document.getElementById("resultat");

btn.addEventListener("click", function () {
  const nb1 = parseFloat(document.getElementById("premiernb").value);
  const nb2 = parseFloat(document.getElementById("deuxièmenb").value);
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