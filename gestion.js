

// *********Création de la Class******************
class Personne {
    constructor(libelle, auteur, date) {
      this.libelle = libelle;
      this.auteur = auteur;
      this.date = date;
    }
  }

  let articlePublier;
//   **************
function ajouter() {
  
    let libelleOrigin = document.getElementById("libelleSavoir").value;
    let aOrigin = document.getElementById("auteur").value;
    let datString = document.getElementById("date").value;
    let dat = new Date(datString);

  
    let libel = " 📖 " + libelleOrigin;
    let aut = " 🗣️ " + aOrigin;
  
  
    // Creation du nouvelle Objet Personne.
    articlePublier = new Personne(libel, aut, dat);
  
    // Vérification des champs vides
    if (libelleOrigin === "" || aOrigin === "" || dat === null) {
      
      return alert("tous les champs doivent être renseigné");

     } 

 
// **fin de création de Classe Personne 
// et début d'affichage ver le HTML******
// let divResultat = document.getElementById("divResultat");
    let olListeSavoir = document.getElementById("olListeSavoir");
    
        // Création des éléments pour l'affichage des données saisies
    let li = document.createElement("li");
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");

  
// Remplissage des données saisies dans les éléments créés
    h1.textContent = articlePublier.libelle;
    h2.innerHTML = articlePublier.auteur + "<br>" + " publié le : " + formatDate(articlePublier.date);

// Ajout des éléments à la liste ordonnée
    li.appendChild(h1);
    li.appendChild(h2);
    olListeSavoir.appendChild(li);


trierElements(); // Appel de la fonction de tri après l'ajout de nouveaux éléments

// Ajout de la gestion de l'événement de clic pour supprimer l'affichage
    li.addEventListener("click", function(event) {
        if (confirm("Voulez-vous supprimer le Savoir ?")) {
        li.parentNode.removeChild(li);
        }
    });

// Réinitialisation des champs de saisie
    document.getElementById("libelleSavoir").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("date").value = "";
    
    console.log(articlePublier);
}



// Fonction pour formater la date au format "jj/mm/aaaa"
function formatDate(date) {
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

return day + "/" + month + "/" + year;

}





  // Ecouteur d'événement pour le bouton "Ajouter"
document.getElementById("sauvegarderEtTri").addEventListener("click", ajouter);