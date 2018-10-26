

document.getElementById("col1").addEventListener("click", col1)
function col1() {
    document.getElementById("60").style.backgroundColor = "yellow";  
}

//////////////////// Grille 7 x 7

var grille = new Array(7);

for (var i = 0; i < 7; i++)
{
 grille[i] = new Array(7);
}

////////////////////////////////////////////////

var joueur = true;
var joueurActif = 0;
        // fonction pour chgt de joueur 
function changementJoueur() {
    if (joueur == true) {
        joueurActif = 1;
        joueur = false;
    }else {
        joueurActif = 2;
        joueur = true;
    }
};

////////////////////////////////////////////////
var vide = 0 ;
var jaune = 1 ;
var rouge = 2 ;

// on parcourt les lignes...
for (var i=0; i<7; i++)
   // ... et dans chaque ligne, on parcourt les cellules
   for(var j=0; j<7; j++)
      grille[i][j] = 0;     // valeur "0" dans chaque case

for(var i=0; i<7; i++)
    for(var j=0; j<7; j++)
        console.log("Case "+ i + "-" + j +" : "+ grille[i][j]);
////////////////////////////////////////////////
for(var i=0; i<7; i++)
    for(var j=0; j<7; j++)

    if (grille[i][j] = 0) {
        document.getElementsByTagName("td").style.backgroundColor = "none";
    } else if (grille[i][j] = 1) { 
        document.getElementsByTagName("td").style.backgroundColor = "red";  
    } else {
        document.getElementsByTagName("td").style.backgroundColor = "red";
    };
