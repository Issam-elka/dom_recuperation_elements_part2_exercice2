// ### 1. Affiche le h3 qui est le premier enfant de la div content
let exo1 = document.getElementById('content').firstElementChild;
console.log(exo1);

// ### 2. Affiche le titreNiv3

let exo2 = document.getElementById('titreNiv3');
console.log(exo2);

// ### 3. Affiche l'élément qui précède le titreNiv3

let exo3 = exo2.previousElementSibling;
console.log(exo3);

// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling

let exo4 = document.getElementById('content').getElementsByClassName('petitParagraphe');
let exo44 = exo4.nextElementSibling;
console.log(exo44);

// ### 5. Affiche le parent des éléments ayant comme class "important" 

let exo5 = document.getElementsByClassName('important');
let parentExo5 = exo5;

// ### 6. Affiche le premier enfant, du parent de "listElements"

let exo6 = document.getElementById('listElements').parentElement.firstElementChild;
console.log(exo6);

// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"

let exo7 = document.getElementsByClassName('important');
let exo77 = exo7.lastElementChild;
console.log(exo77);

// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
