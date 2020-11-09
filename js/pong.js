

//let Largeur=$("#balle").width();
//let gauche=parseInt($("#balle").css("left"));
//let haut=parseInt($("#balle").css("top"));

//fichier Terrain.js
class Terrain{
    constructor($element){
        this.$element=$element
        this.Largeur=$element.width();
        this.hauteur=$element.height();
    }     

}
//fichier Balle.js
class Balle{
    constructor($html){
        this.$html=$html;
        this.gauche=parseInt($("#balle").css("left"));
        this.haut=parseInt($("#balle").css("top"));
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

//modifie la position de la balle
setInterval(function(){
    balle.gauche =balle.gauche + balle.vitesseX;
    balle.haut = balle.haut + balle.vitesseY;
    
    if(balle.gauche>terrain.Largeur){
        balle.gauche=terrain.Largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.gauche<0){
        balle.haut=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut>terrain.Largeur){
        balle.gauche=terrain.Largeur;
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }
    balle.majHTML
    
}, 10);