



// ***************Mise a jour**************************************
  // par ordre alphabétique sur l'auteur et par ordre chronologique sur la date
  // ***************Mise a jour**************************************
  

 // Fonction pour trier les éléments de la liste
 function trierElements() {
    let olListeSavoir = document.getElementById("olListeSavoir");
    let elements = Array.from(olListeSavoir.children);
  
    elements.sort(function(a, b) {
      let aAuteur = a.getElementsByTagName("h2")[0].textContent.toLowerCase();
      let bAuteur = b.getElementsByTagName("h2")[0].textContent.toLowerCase();
      let aDate = new Date(a.getElementsByTagName("h2")[0].textContent.split(" ")[1]);
      let bDate = new Date(b.getElementsByTagName("h2")[0].textContent.split(" ")[1]);
  
      if (aAuteur < bAuteur) {
        return -1;
      } else if (aAuteur > bAuteur) {
        return 1;
      } else {
        return aDate - bDate;
      }
    });
  
    while (olListeSavoir.firstChild) {
      olListeSavoir.removeChild(olListeSavoir.firstChild);
    }
  
    elements.forEach(function(element) {
      olListeSavoir.appendChild(element);
    });
  }
  

  
  // Ecouteur d'événement pour le bouton "Ajouter"
  document.getElementById("sauvegarderEtTri").addEventListener("click", ajouter);
  