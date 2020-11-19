
// Mouvement de la balle

setInterval(function(){
    balle.gauche = balle.gauche + balle.vitesseX;
    balle.haut = balle.haut + balle.vitesseY;

    if(balle.gauche>terrain.Largeur){
       balle.gauche=terrain.Largeur;
       balle.vitesseX=balle.vitesseX*-1;
}
    if(balle.gauche<0){
       balle.gauche=0;
       balle.vitesseX=balle.vitesseX*-1;
}
    if(balle.bas>terrain.hauteur){
       balle.bas=terrain.hauteur;
       balle.vitesseY=balle.vitesseY*-1;
}
    if(balle.haut<0){
       balle.haut=0;
       balle.vitesseY=balle.vitesseY*-1;
}

/**Mouvement des raquettes */
raquetteA.haut=raquetteA.haut+raquetteA.vitesse;
raquetteB.haut=raquetteB.haut+raquetteB.vitesse;

if(raquetteA.haut>terrain.hauteur-raquetteA.hauteur){
    raquetteA.haut=terrain.hauteur-raquetteA.hauteur;
    raquetteA.vitesse=raquetteA.vitesse*-1;
}
if(raquetteA.haut<0){
    raquetteA.haut=0;
    raquetteA.vitesse=raquetteA.vitesse*-1;
}

if(raquetteB.haut>terrain.hauteur-2*raquetteB.hauteur){
    raquetteB.haut=terrain.hauteur-2*raquetteB.hauteur;
    raquetteB.vitesse=raquetteB.vitesse*-1;
}

if(raquetteB.haut<0-raquetteB.hauteur){
    raquetteB.haut=0-raquetteB.hauteur;
    raquetteB.vitesse=raquetteB.vitesse*-1;
}

raquetteA.majHTML();
raquetteB.majHTML();

}, 10);

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été enfoncée")
    event.preventDefault();
  }, true);
  
  window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été relachée")
    event.preventDefault();
  }, true);