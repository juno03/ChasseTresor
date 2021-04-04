
//Déclaration des variable servant à déterminé la postion du point gagnant :
let CoX = Math.floor(Math.random()*9+1);
let CoY = Math.floor(Math.random()*7+1);

//Concaténation pour obtenir des coordonnées fidèle a l'id :
let Co = CoX+"-"+CoY

//Déclaration de la variable événement :
let evenement = 0
let money = 100000

//Fonction CHOIX :
function choix(clicked_id)
{
    evenement = Math.floor(Math.random()*50+1);                                                 //détermine l'événement aléatoire
    if (clicked_id==Co){                                                                        //Si les coordonée sont égale à l'ID de la case sur laquel le joueur à cliquer 
        document.getElementById(clicked_id).style.background = "green";                         // Le background de la case passe au vert
        document.getElementById(clicked_id).innerHTML = "X"                                     // on indique un X au centre de la case pour le style
        alert("Tu a retrouvé ta planque ! Tu garde ton magots ! Profite bien de ton fric gangster ! (tu gagne 250 point d'exp et ton magots a été ajouter a ton compte offshore)") //message de victoire
        setTimeout(function(){                                                                  //fonction de redirection automatique après avoir valider le message temps fixé a 100ms 
        window.location.href = 'loading2.html';
        }, 100);

    } else if (clicked_id!==Co && evenement == 1 && clicked_id !=="X" ) {                       //Sinon  si l'id de la case choisi n'es pas égale au coordonées du début et si l'événement aléa est a 1 et si l'id de la case n'es pas à X
        document.getElementById(clicked_id).style.background = "orange";                        //La case devient orange
        document.getElementById(clicked_id).innerHTML = "X"                                     //on affiche un X dans la case
        document.getElementById(clicked_id).id = "X"                                            //L'id de la case deviens égale à  X
        money = money-10000
        document.getElementById("magValue").innerText = money+"$"
        alert("La police ta tendu un barrage ! tu perd 10k$ pour les soudoyer !")               //Petit message pour indiquer ce qu'il se passe au joueur
        

    } else if (clicked_id!==Co && evenement == 3 && clicked_id !=="X"){                         //Même principe
        document.getElementById(clicked_id).style.background = "blue";                          //
        document.getElementById(clicked_id).innerHTML = "X"                                     //
        document.getElementById(clicked_id).id = "X"                                            //
        alert("Tu retrouve un de tes collégues avec la police a c'est trousse ! tu gagne 35k$") //
        money = money+35000
        document.getElementById("magValue").innerText = money+"$"

    } else if (clicked_id!==Co && evenement == 50 && clicked_id !=="X"){                        //
        document.getElementById(clicked_id).style.background = "red";                           //
        document.getElementById(clicked_id).innerHTML = "X"                                     //
        document.getElementById(clicked_id).id = "X"                                            //
        alert("C'est la merde ! les flics ton arrêter ! Je vais voir ce que je peut faire pour te sortir de la mais attends toi à passer un bon moment en prison !") //
        setTimeout(function(){                                                                  //fonction de redirection automatique après avoir valider le message temps fixé a 100ms 
            window.location.href = 'loading2.html';
            }, 100);

    } else if(clicked_id == "X"){                                                               //Message si le joueur essaye de tricher si L'ID séléctionner est déja égale à X
        alert("tu est déja passé par la !")
    } else {
        document.getElementById(clicked_id).style.background = "grey";                         //Case neutre même principe que avant
        document.getElementById(clicked_id).innerHTML = "X"
        document.getElementById(clicked_id).id = "X"
    }
}


