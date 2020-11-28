//les raquettes
class Raquette{
    
    constructor($element){
        this.$element = $element;
        this.hauteur = $element.height();
        this.largeur =$element.width();
        this.positionX = parseInt(this.$element.css("left"));
        this.positionY = parseInt(this.$element.css("top"));
        this.vitesseY = 0;
        this.gauche = true;

    }

    //getter and setter
    get bas(){
        return this.positionY + this.hauteur;
    }
    get droite(){
        return this.positionX + this.largeur;
    }
    set bas(value) {
        this.positionY = value - this.hauteur;
    }
    set droite(value){
        this.positionX = value - this.largeur;
    }

    
    checkJoueur(terrain){
        this.gauche = (this.positionX < terrain.largeur / 2);
    }
    bouger(){
        this.positionY = this.positionY + this.vitesseY;
        this.majHTML();
    }

    arreterDeBouger(){
        this.vitesseY = 0;
    }

    monter(){
        if (this.positionY > 0){
            this.vitesseY = -2;
        }
        else{
            this.positionY = 0;
            this.arreterDeBouger();
        }
    }

    descendre(){
        if (this.bas < terrain.hauteur){
            this.vitesseY = 2;
        }
        else{
            this.bas = terrain.hauteur;
            this.arreterDeBouger();
        }
    }

    calculRebond(positionYBalle){    
    }

    majHTML(){
        this.$element.css("left",this.positionX);
        this.$element.css("top",this.positionY);
    }

}