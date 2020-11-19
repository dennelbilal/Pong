//les raquettes
class Raquette{ 
    constructor($html){
        this.$html=$html;
        this.haut = parseInt($html.css("top"));
        this.gauche = parseInt($html.css("left"));
        this.Largeur = $html.width();
        this.hauteur = $html.height();
        this.vitesse=1.5;
        this.direction=0;
      
    }
    
    get bas(){ 
        return this.haut+this.hauteur;
    }

    set bas(value) {
        this.haut = value - this.hauteur;
    }

    get droite() {
        return this.gauche+this.Largeur;
    }

    set droite(value) {
        this.Largeur = value - this.Largeur;
    }
    
    monte(){
        this.direction=-1;
    }

    descend(){
        this.direction=1;
    }

    stop(){
        this.direction=0;
    }
    

    majHTML(){
        this.$html.css("top",this.haut);
    }  

    bouge(){
        this.haut=this.haut+this.vitesse*this.direction;
        this.majHTML(); 
        if (this.haut<0){
            this.haut=0;
            this.stop();
        }
        if (this.bas>terrain.hauteur){
            this.bas=terrain.hauteur;
            this.stop();
        }
    }


}

let raquetteA = new Raquette($("#raquetteA"));
let raquetteB = new Raquette($("#raquetteB"));