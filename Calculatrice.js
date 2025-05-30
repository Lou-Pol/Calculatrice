import { addition, soustraction, multiplication, division} from "./calculsafaire.js";
const resultat = document.getElementById("resultat");
const historique = document.getElementById("historique");
const inputA = document.getElementById("premiernb");
const inputB = document.getElementById("deuxièmenb");

let hist = [];

window.addEventListener('DOMContentLoaded', setup);


export const Calculs = () =>{
    
    const nb1 = parseFloat(inputA.value);
    const nb2 = parseFloat(inputB.value);
    const oper = document.getElementById("operation").value;


    inputA.classList.remove("erreur");
    inputB.classList.remove("erreur");
    resultat.className = "";
    resultat.textContent = "";

    if (isNaN(nb1)) {
        inputA.classList.add("erreur");
        resultat.textContent = "Le premier nombre n'est pas valide";
        resultat.classList.add("message_erreur");
        return;
    }
    if (isNaN(nb2)) {
        inputB.classList.add("erreur");
        resultat.textContent = "Le deuxième nombre n'est pas valide";
        resultat.classList.add("message_erreur");
        return;
    }

    let res;
    if (oper === "/" && nb2 === 0) {
        resultat.textContent = "Division par 0";
        resultat.classList.add("message_erreur");
        inputB.classList.add("erreur");
        return;
    }

    switch (oper) {
        case "+": res = addition(nb1,nb2); break;
        case "-": res = soustraction(nb1,nb2); break;
        case "*": res = multiplication(nb1,nb2); break;
        case "/": res = division(nb1,nb2); break;
        default: res = "Opération inconnue";
    }
    AfficherRes(res);
    Histori(nb1,oper,nb2,res);
}
export const AfficherRes = (res) =>
    {
    if (typeof res === "number") {
        resultat.textContent = `Résultat: ${res}`;
        if (res > 0) {
            resultat.classList.add("positif");
        } else if (res < 0) {
            resultat.classList.add("negatif");
        } else {
            resultat.classList.remove("succes", "negatif", "message_erreur");
        }

    }
};
export const Histori = (nb1,oper,nb2,res)=>{
    hist.push({ nb1, oper, nb2, res });
        historique.innerHTML = "";
        hist.forEach((item, index) => 
            {
            const ligne = document.createElement("p");
            ligne.textContent = `${index + 1}: ${item.nb1} ${item.oper} ${item.nb2} = ${item.res}`;
            historique.appendChild(ligne);
            });
};
        
export function setup(){
    document.getElementById('calculer').addEventListener('click', Calculs)
}

 