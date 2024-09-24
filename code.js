// Déclaration du tableau avec les mois
var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet'];

// 1. Retirer la dernière valeur du tableau
mois.pop(); // 'juillet' est retiré du tableau

// 2. Afficher les valeurs du tableau
document.write(" <strong>Les mois </strong>: " + mois.join(", ") + "<br>"); // join() permet de convertir le tableau en chaîne de caractères

// 3. Ajouter la valeur 'août' à la fin du tableau
mois.push('août'); // 'août' est ajouté à la fin du tableau

// 4. Remplacer la valeur 'février' par 'février'
mois[1] = 'février'; // On remplace le deuxième élément (index 1)

// 5. Afficher le nombre de valeurs du tableau
document.write("<strong>Nombre de mois </strong>: " + mois.length + "<br>"); // length donne le nombre d'éléments dans le tableau

// 6. Afficher la troisième valeur du tableau
document.write(" <strong>Le troisième mois</strong>: " + mois[2] + "<br>"); // On accède à l'élément à l'index 2

/*
// Déclaration du tableau avec les mois
var mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet'];

// 1. Retirer la dernière valeur du tableau
mois.pop(); // 'juillet' est retiré du tableau

// 2. Ajouter la valeur 'août' à la fin du tableau
mois.push('août'); // 'août' est ajouté à la fin du tableau

// 3. Remplacer la valeur 'février' par 'février'
mois[1] = 'février'; // On remplace le deuxième élément (index 1)

// Affichage dans un tableau HTML
document.write("<table border='1'><tr><th>Mois</th></tr>");

// 4. Afficher les valeurs du tableau
mois.forEach(function(mois) {
    document.write("<tr><td>" + mois + "</td></tr>");
});
document.write("</table><br>");

// 5. Afficher le nombre de valeurs du tableau
document.write("Nombre de mois : " + mois.length + "<br>");

// 6. Afficher la troisième valeur du tableau
document.write("Le troisième mois : " + mois[2] + "<br>");
*/
