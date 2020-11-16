
class Balle{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("top"));
        this.gauche=parseInt($("#balle").css("left"));
        this.bas=parseInt($("#balle").css("bot"));
        this.vitesseX=2;
        this.vitesseY=0.5;
        
    }
    majHTML(){
    this.$html.css("left",balle.gauche);
    this.$html.css("top",balle.haut);
    this.$html.css("bot",balle.bas);
    }

}

