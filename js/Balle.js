
class Balle{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top"));
        this.gauche=parseInt($("#balle").css("left"));
        this.vitesseX=2;
        this.vitesseY=0.5;
        
    }
get bas() {
    return this.haut+this.hauteur;
}

set bas(value) {
    this.haut = value - this.hauteur;
}

get droite() {
    return this.gauche+this.largeur;
}

set droite(value) {
    this.largeur = value - this.largeur;
}

majHTML(){ 
this.$html.css("left",balle.gauche);
this.$html.css("top",balle.haut);
}

 
limitmouv(){
    
    this.majHTML();

    
    if(this.bas>terrain.hauteur){
        this.bas=terrain.hauteur;
        this.vitesseY=this.vitesseY*-1;
    }
   
    if(this.haut<0){
        this.haut=0;
        this.vitesseY=this.vitesseY*-1;
    }
    
    if (this.droite>terrain.largeur){
        this.gauche=terrain.largeur/2;
        this.haut=terrain.hauteur/2;
    }
    
    if(this.gauche<0){
        this.gauche=terrain.largeur/2;
        this.haut=terrain.hauteur/2;
    }

    if(this.gauche < raquetteG.droite){
        if(this.bas > raquetteG.haut){
          if(this.haut < raquetteG.bas){
            this.vitesseX = this.vitesseX*-1;
          }
        }
    }
    if(this.droite > raquetteD.gauche){
        if(this.bas > raquetteD.haut){
          if(this.haut < raquetteD.bas){
            this.vitesseX = this.vitesseX*-1;
          }
        }
    }
}

bouge(){
    this.gauche=this.gauche+this.vitesseX;
    this.haut=this.haut+this.vitesseY;  
    this.majHTML();
   }  
}

let balle = new Balle($("#balle"));