//////////////////// Grille 7 x 7

var grille = new Array(7);

for (var i = 0; i < 7; i++)
{
 grille[i] = new Array(7);
}
// rempli le tableau de "vide"
for (var i=0; i<7; i++){
   for(var j=0; j<7; j++){
      grille[i][j] = "vide";
    }  
}   

////////////////////////////////////////////////


// var col1 = document.getElementById("col1");
// var col2 = document.getElementById("col2");
// var col3 = document.getElementById("col3");
// var col4 = document.getElementById("col4");
// var col5 = document.getElementById("col5");
// var col6 = document.getElementById("col6");
// var col7 = document.getElementById("col7");


document.getElementById("grille").addEventListener("click", function(event){
    var clickedCellElmt;
    var clickedCellName;
    var clickedCellCoordX;
    var clickedCellCoordY;

    clickedCellElmt = document.getElementById(event.target.id); //enregistre l'élément enfant du DOM qui a été cliquée.
    clickedCellName = event.target.id; //renvoie l'id de la cellule cliquée sous forme de string(chaine de caractère)
    // clickedCellCoordX = parseInt(clickedCellName[0]); // récupère le 2eme caractère dans l'ID
    clickedCellCoordY = parseInt(clickedCellName[1]); // récupère le 2eme caractère dans l'ID
    console.log(" Y : " + clickedCellCoordY);
    console.log("clickedCell : " + clickedCellName);

    console.log(grille);
    console.log(clickedCellElmt);

    pion();

    function pion() {
        if (grille[6][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                document.getElementById("6"+ clickedCellCoordY).style.backgroundColor = "yellow";
                grille[6][clickedCellCoordY] = "jaune";
                console.log(grille[6][clickedCellCoordY]);
                clickedCellCoordX = 6;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();
            } else {
                document.getElementById("6"+ clickedCellCoordY).style.backgroundColor = "red";
                grille[6][clickedCellCoordY] = "rouge";  
                console.log(grille[6][clickedCellCoordY]);
                clickedCellCoordX = 6;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();
            }

        } else if (grille[5][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                document.getElementById("5"+ clickedCellCoordY).style.backgroundColor = "yellow";
                grille[5][clickedCellCoordY] = "jaune";
                console.log(grille[5][clickedCellCoordY]);
                clickedCellCoordX = 5;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();

            } else {
                document.getElementById("5"+ clickedCellCoordY).style.backgroundColor = "red";                
                grille[5][clickedCellCoordY] = "rouge"; 
                console.log(grille[5][clickedCellCoordY]);
                clickedCellCoordX = 5;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();
            }
    
        } else if (grille[4][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                document.getElementById("4"+ clickedCellCoordY).style.backgroundColor = "yellow";
                grille[4][clickedCellCoordY] = "jaune";
                console.log(grille[4][clickedCellCoordY]);
                clickedCellCoordX = 4;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();

            } else {
                document.getElementById("4"+ clickedCellCoordY).style.backgroundColor = "red";                
                grille[4][clickedCellCoordY] = "rouge";  
                console.log(grille[4][clickedCellCoordY]);
                clickedCellCoordX = 4;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();
            }

        } else if (grille[3][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                document.getElementById("3"+ clickedCellCoordY).style.backgroundColor = "yellow";
                grille[3][clickedCellCoordY] = "jaune";
                console.log(grille[3][clickedCellCoordY]);
                clickedCellCoordX = 3;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();

            } else {
                document.getElementById("3"+ clickedCellCoordY).style.backgroundColor = "red";                
                grille[3][clickedCellCoordY] = "rouge"; 
                console.log(grille[3][clickedCellCoordY]);
                clickedCellCoordX = 3;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();
            }

        } else if (grille[2][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                document.getElementById("2"+ clickedCellCoordY).style.backgroundColor = "yellow";
                grille[2][clickedCellCoordY] = "jaune";
                console.log(grille[2][clickedCellCoordY]);
                clickedCellCoordX = 2;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();

            } else {
                document.getElementById("2"+ clickedCellCoordY).style.backgroundColor = "red";                
                grille[2][clickedCellCoordY] = "rouge";  
                console.log(grille[2][clickedCellCoordY]);
                clickedCellCoordX = 2;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();
            }

        } else if (grille[1][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                document.getElementById("1"+ clickedCellCoordY).style.backgroundColor = "yellow";
                grille[1][clickedCellCoordY] = "jaune";
                console.log(grille[1][clickedCellCoordY]);
                clickedCellCoordX = 1;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();

            } else {
                document.getElementById("1"+ clickedCellCoordY).style.backgroundColor = "red";                
                grille[1][clickedCellCoordY] = "rouge";  
                console.log(grille[1][clickedCellCoordY]);
                clickedCellCoordX = 1;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();
            }

        } else if (grille[0][clickedCellCoordY] == "vide" ) {
            if (joueurActif == 1) {
                document.getElementById("0"+ clickedCellCoordY).style.backgroundColor = "yellow";
                grille[0][clickedCellCoordY] = "jaune";
                console.log(grille[0][clickedCellCoordY]);
                clickedCellCoordX = 0;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();

            } else {
                document.getElementById("0"+ clickedCellCoordY).style.backgroundColor = "red";
                grille[0][clickedCellCoordY] = "rouge"; 
                console.log(grille[0][clickedCellCoordY]);
                clickedCellCoordX = 0;
                victoireLigne();
                victoireColonne();
                victoireDiag1();
                victoireDiag2();
                changementJoueur();
            }
 
        }
 
    }


// Conditions de victoire

// verfif ligne
    function victoireLigne() {
        var compteur = 0;
        var ligne = clickedCellCoordX;
        var colonne = clickedCellCoordY;
        if (joueurActif == 1) {
            
            while (grille[ligne][colonne] == "jaune") {
                colonne ++;
            } 
            while (grille[ligne][colonne-1] == "jaune") {
                colonne --;
                compteur ++;
            }
            if (compteur >= 4) {
                document.getElementById("joueurActif").innerHTML = "Relancer la partie";
                document.getElementById("vainqueur").innerHTML = ("JOUEUR JAUNE WIN");
                document.getElementById("vainqueur").style.color = "yellow";
                document.getElementById("vainqueur").style.fontWeight = "bold";
                document.getElementById("vainqueur").style.fontSize = "2em";
                for (var i=0; i<7; i++)
                    for(var j=0; j<7; j++)
                        grille[i][j] = "plein"; 
            } 

        } else if (joueurActif == 2) {
               
                while (grille[ligne][colonne] == "rouge") {
                    colonne ++;
                } 
                while (grille[ligne][colonne-1] == "rouge") {
                    colonne --;
                    compteur ++;
                }
                if (compteur >= 4) {
                    document.getElementById("vainqueur").innerHTML = ("JOUEUR ROUGE WIN");
                    document.getElementById("vainqueur").style.color = "red";
                    document.getElementById("vainqueur").style.fontWeight = "bold";
                    document.getElementById("vainqueur").style.fontSize = "2em";
                    for (var i=0; i<7; i++)
                        for(var j=0; j<7; j++)
                            grille[i][j] = "plein";
                }
        }
        
    }

// verif colonne
    function victoireColonne() {
        var compteur = 0;
        var ligne = clickedCellCoordX;
        var colonne = clickedCellCoordY;

        if (joueurActif == 1) {
            while (grille[ligne][colonne] == "jaune") {
                if (ligne != 6) {
                    ligne ++
                }else { 
                    ligne ++;
                    break;
                } 
            }
            while (grille[ligne-1][colonne] == "jaune") {
                if (ligne-1 != 0) {
                    ligne --;
                    compteur ++;
                } else {
                    break;
                }
            }
            if (compteur >= 4) {
                document.getElementById("vainqueur").innerHTML = ("JOUEUR JAUNE WIN");
                document.getElementById("vainqueur").style.color = "yellow";
                document.getElementById("vainqueur").style.fontWeight = "bold";
                document.getElementById("vainqueur").style.fontSize = "2em";
                for (var i=0; i<7; i++)
                    for(var j=0; j<7; j++)
                        grille[i][j] = "plein";
                }
        } else if (joueurActif == 2) {
            while (grille[ligne][colonne] == "rouge") {
                if (ligne != 6) {
                    ligne ++
                }else { 
                    ligne ++;
                    break;
                }  
            } 
            while (grille[ligne-1][colonne] == "rouge") {
                if (ligne-1 != 0) {
                    ligne --;
                    compteur ++;
                } else {
                    break;
                }
            }
            if (compteur >= 4) {
                document.getElementById("vainqueur").innerHTML = ("JOUEUR ROUGE WIN");
                document.getElementById("vainqueur").style.color = "red";
                document.getElementById("vainqueur").style.fontWeight = "bold";
                document.getElementById("vainqueur").style.fontSize = "2em";
                for (var i=0; i<7; i++)
                    for(var j=0; j<7; j++)
                        grille[i][j] = "plein";
            }
        }
    }
//  verif diagonale 1
    function victoireDiag1() {
        var compteur = 0;
        var ligne = clickedCellCoordX;
        var colonne = clickedCellCoordY;
        if (joueurActif == 1) {
             
            while (grille[ligne][colonne] == "jaune") {
                if (ligne != 6 && colonne != 6) {
                    colonne ++;
                    ligne ++;
                } else {
                    colonne ++;
                    ligne ++;
                    break;
                }
            }            
                while (grille[ligne-1][colonne-1] == "jaune") {
                    if (ligne-1 != 0 && colonne-1 != 0) {
                        colonne --;
                        ligne --;
                        compteur ++;
                    } else {
                        break;
                    }
                }
             if (compteur >= 4) {
                document.getElementById("vainqueur").innerHTML = ("JOUEUR JAUNE WIN");
                document.getElementById("vainqueur").style.color = "yellow";
                document.getElementById("vainqueur").style.fontWeight = "bold";
                document.getElementById("vainqueur").style.fontSize = "2em";
                for (var i=0; i<7; i++)
                    for(var j=0; j<7; j++)
                        grille[i][j] = "plein";
             }
        } else if (joueurActif == 2) {
                while (grille[ligne][colonne] == "rouge") {
                    if (ligne != 6 && colonne != 6) {
                        colonne ++;
                        ligne ++;
                    }else {
                        colonne ++;
                        ligne ++;
                        break;
                    }
                } 
                 while (grille[ligne-1][colonne-1] == "rouge") {
                    if (ligne-1 != 0 && colonne-1 != 0) {
                        colonne --;
                        ligne --;
                        compteur ++;
                    } else {
                        break;
                    }
                }
                 if (compteur >= 4) {
                    document.getElementById("vainqueur").innerHTML = ("JOUEUR ROUGE WIN");
                    document.getElementById("vainqueur").style.color = "red";
                    document.getElementById("vainqueur").style.fontWeight = "bold";
                    document.getElementById("vainqueur").style.fontSize = "2em";
                    for (var i=0; i<7; i++)
                        for(var j=0; j<7; j++)
                            grille[i][j] = "plein";
                 }
             }
        
    }
// verifie diagonale 2
    function victoireDiag2() {
        var compteur = 0;
        var ligne = clickedCellCoordX;
        var colonne = clickedCellCoordY;
         if (joueurActif == 1) {
            while (grille[ligne][colonne] == "jaune") {
                if (ligne != 6 && colonne != 0) {                
                    colonne --;
                    ligne ++;
                }else {
                    colonne --;
                    ligne ++;    
                    break;
                }
            }
            while (grille[ligne-1][colonne+1] == "jaune") {
                if (ligne-1 != 0 && colonne+1 != 6) {  
                    colonne ++;
                    ligne --;
                    compteur ++;
                } else {
                    break;
                }
            }
            if (compteur >= 4) {
                document.getElementById("vainqueur").innerHTML = ("JOUEUR JAUNE WIN");
                document.getElementById("vainqueur").style.color = "yellow";
                document.getElementById("vainqueur").style.fontWeight = "bold";
                document.getElementById("vainqueur").style.fontSize = "2em";
                for (var i=0; i<7; i++)
                    for(var j=0; j<7; j++)
                        grille[i][j] = "plein";
            }
        } else if (joueurActif == 2) {
            while (grille[ligne][colonne] == "rouge") {
                if (ligne != 6 && colonne != 0) {                
                    colonne --;
                    ligne ++;
                }else {
                    colonne --;
                    ligne ++;    
                    break;
                }
            }
            while (grille[ligne-1][colonne+1] == "rouge") {
                if (ligne-1 != 0 && colonne+1 != 6) {  
                    colonne ++;
                    ligne --;
                    compteur ++;
                } else {
                    break;
                }
            }
            if (compteur >= 4) {
                document.getElementById("vainqueur").innerHTML = ("JOUEUR ROUGE WIN");
                document.getElementById("vainqueur").style.color = "red";
                document.getElementById("vainqueur").style.fontWeight = "bold";
                document.getElementById("vainqueur").style.fontSize = "2em";
                for (var i=0; i<7; i++)
                    for(var j=0; j<7; j++)
                        grille[i][j] = "plein";
                }
        }
         
    }
});


       
    // fonction pour chgt de joueur 

var joueur = true;
var joueurActif = 0;

changementJoueur();        
function changementJoueur() {
    if (joueur == true) {
        joueurActif = 1;
        document.getElementById("joueurActif").innerHTML = ("AU JOUEUR JAUNE DE JOUER");
        document.getElementById("joueurActif").style.color = "yellow";
        joueur = false;
    } else {
        joueurActif = 2;
        document.getElementById("joueurActif").innerHTML = ("AU JOUEUR ROUGE DE JOUER");
        document.getElementById("joueurActif").style.color = "red";
        joueur = true;
    }
};


document.getElementById("nouvellePartie").addEventListener("click",reset);
 function reset() {
    for (var i=0; i<7; i++){
        document.getElementById(i+"0").style.backgroundColor="white";
        document.getElementById(i+"1").style.backgroundColor="white";
        document.getElementById(i+"2").style.backgroundColor="white";
        document.getElementById(i+"3").style.backgroundColor="white";
        document.getElementById(i+"4").style.backgroundColor="white";
        document.getElementById(i+"5").style.backgroundColor="white";
        document.getElementById(i+"6").style.backgroundColor="white";
        for(var j=0; j<7; j++){
            grille[i][j] = "vide";
        }
        document.getElementById("vainqueur").innerHTML = "REVANCHE";
        document.getElementById("vainqueur").style.color = "black";
    }
}













////////////////////////////////////////////////


// on parcourt les lignes...
// for(var i=0; i<7; i++)
//     for(var j=0; j<7; j++)
//         console.log("Case "+ i + "-" + j +" : "+ grille[i][j]);
///////////////////////////////////////////////
