//////////////////// Grille 7 x 7

var grille = new Array(7);

for (var i = 0; i < 7; i++)
{
 grille[i] = new Array(7);
}
// rempli le tableau de "vide"
for (var i=0; i<7; i++)
   for(var j=0; j<7; j++)
      grille[i][j] = "vide";     

////////////////////////////////////////////////


var col1 = document.getElementById("col1");
var col2 = document.getElementById("col2");
var col3 = document.getElementById("col3");
var col4 = document.getElementById("col4");
var col5 = document.getElementById("col5");
var col6 = document.getElementById("col6");
var col7 = document.getElementById("col7");


document.getElementById("grille").addEventListener("click", function(event){
    var clickedCellElmt;
    var clickedCellName;
    // var clickedCellCoordX;
    var clickedCellCoordY;

    clickedCellElmt = document.getElementById(event.target.id); //enregistre l'élément enfant du DOM qui a été cliquée.
    clickedCellName = event.target.id; //renvoie l'id de la cellule cliquée sous forme de string
    // clickedCellCoordX = parseInt(clickedCellName[0]); // récupère le 2eme caractère dans l'ID
    clickedCellCoordY = parseInt(clickedCellName[1]); // récupère le 5eme caractère dans l'ID
    console.log(" Y : " + clickedCellCoordY);
    console.log("clickedCell : " + clickedCellName);

    console.log(grille);
    console.log(clickedCellElmt);
    pionY();
    function pionY() {
        
        if (clickedCellCoordY == 0) {
            pionX();
        }else if (clickedCellCoordY == 1) {
            pionX();
        }else if (clickedCellCoordY == 2) {
            pionX();
        }else if (clickedCellCoordY == 3) {
            pionX();
        }else if (clickedCellCoordY == 4) {
            pionX();
        }else if (clickedCellCoordY == 5) {
            pionX();
        }else if (clickedCellCoordY == 6) {
            pionX();
        }
        }   

    function pionX() {
        if (grille[6][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                // grille[6][clickedCellCoordY].style.backgroundColor = "yellow";
                changementJoueur();
                grille[6][clickedCellCoordY] = "jaune";
                console.log(grille[6][clickedCellCoordY]);
             } else {
                // grille[6][clickedCellCoordY].style.backgroundColor = "red";
                changementJoueur();
                grille[6][clickedCellCoordY] = "rouge";  
                console.log(grille[6][clickedCellCoordY]);


        }}else if (grille[5][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                // grille[5][clickedCellCoordY].style.backgroundColor = "yellow";
                changementJoueur();
                grille[5][clickedCellCoordY] = "jaune";
                console.log(grille[5][clickedCellCoordY]);

             } else {
                // grille[5][clickedCellCoordY].style.backgroundColor = "red";
                changementJoueur();
                grille[5][clickedCellCoordY] = "rouge"; 
                console.log(grille[5][clickedCellCoordY]);


        }}else if (grille[4][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                // grille[4][clickedCellCoordY].style.backgroundColor = "yellow";
                changementJoueur();
                grille[4][clickedCellCoordY] = "jaune";
                console.log(grille[4][clickedCellCoordY]);

             } else {
                // grille[4][clickedCellCoordY].style.backgroundColor = "red";
                changementJoueur();
                grille[4][clickedCellCoordY] = "rouge";  
                console.log(grille[4][clickedCellCoordY]);


        }}else if (grille[3][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                // grille[6][clickedCellCoordY].style.backgroundColor = "yellow";
                changementJoueur();
                grille[3][clickedCellCoordY] = "jaune";
                console.log(grille[3][clickedCellCoordY]);

             } else {
                // grille[6][clickedCellCoordY].style.backgroundColor = "red";
                changementJoueur();
                grille[3][clickedCellCoordY] = "rouge"; 
                console.log(grille[3][clickedCellCoordY]);
 

        }}else if (grille[2][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                // grille[2][clickedCellCoordY].style.backgroundColor = "yellow";
                changementJoueur();
                grille[2][clickedCellCoordY] = "jaune";
                console.log(grille[2][clickedCellCoordY]);

             } else {
                // grille[2][clickedCellCoordY].style.backgroundColor = "red";
                changementJoueur();
                grille[2][clickedCellCoordY] = "rouge";  
                console.log(grille[2][clickedCellCoordY]);


        }}else if (grille[1][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                // grille[1][clickedCellCoordY].style.backgroundColor = "yellow";
                changementJoueur();
                grille[1][clickedCellCoordY] = "jaune";
                console.log(grille[1][clickedCellCoordY]);

             } else {
                // grille[1][clickedCellCoordY].style.backgroundColor = "red";
                changementJoueur();
                grille[1][clickedCellCoordY] = "rouge";  
                console.log(grille[1][clickedCellCoordY]);


        }}else if (grille[0][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                // grille[0][clickedCellCoordY].style.backgroundColor = "yellow";
                changementJoueur();
                grille[0][clickedCellCoordY] = "jaune";
                console.log(grille[0][clickedCellCoordY]);

             } else {
                // grille[0][clickedCellCoordY].style.backgroundColor = "red";
                changementJoueur();
                grille[0][clickedCellCoordY] = "rouge"; 
                console.log(grille[0][clickedCellCoordY]);
             }
 
        };
 
}});


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
}
















////////////////////////////////////////////////


// on parcourt les lignes...
// for(var i=0; i<7; i++)
//     for(var j=0; j<7; j++)
//         console.log("Case "+ i + "-" + j +" : "+ grille[i][j]);
///////////////////////////////////////////////
