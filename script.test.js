import { Calculs, AfficherRes, Histori, setup } from "./Calculatrice";

beforeEach(() => {
    document.body.innerHTML=`
    <input   type="number" class="champsCalcul" id="premiernb"/>
    <br>
    <select id="operation" class="champsCalcul">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <br>
    <input  type="number" class="champsCalcul" id = "deuxièmenb"/>
    <br>
    <button id="calculer" class="champsCalcul">Calculer</button>
    <p id="resultat">Résultat :</p>
    <p><h3>Historique des opérations</h3></p>
    
    <p id="historique"></p>
    `;
    setup();
});
test('état initial du DOM', ()=>{
    expect(document.getElementById('operation').value).toBe('+');

});
