

//let Largeur=$("#balle").width();
//let gauche=parseInt($("#balle").css("left"));
//let haut=parseInt($("#balle").css("top"));

//fichier Terrain
class Terrain{
    constructor($element){
        this.$element=$element
        this.largeur=$element.width();
        this.hauteur=$element.height();
            
        }
    
    }

//Classe Balle

class Balle{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top"));
        this.gauche=parseInt($("#balle").css("left"));
        this.vitesseX=2;
        this.vitesseY=0.5;
        
    }
    majHTML(){
    this.$html.css("left",balle.gauche);
    this.$html.css("top",balle.haut);
    }

}

let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));


// Script de la balle

setInterval(function(){
    balle.gauche = balle.gauche + balle.vitesseX;
    balle.haut = balle.haut + balle.vitesseY;


    if(balle.gauche>terrain.largeur){
    balle.gauche=terrain.largeur;
    balle.vitesseX=balle.vitesseX*-1;
}

    if(balle.haut>terrain.hauteur){
    balle.haut=0;
}
balle.majHTML();

}, 10);