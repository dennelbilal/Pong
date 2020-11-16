//les raquettes
class raquette{

    contructor($element){
    this.$element= $element;
    this.haut= parseInt($element.css("top"));
    this.Largeur= $element.width();
    this.hauteur= $element.height();
    this.vitesse= 1.5;
    this.direction= 1;

    this.bas= this.haut+this.hauteur;
   }
    get bas(){
        return this.haut+this.hauteur;
    }
}