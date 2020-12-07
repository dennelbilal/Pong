class Joueur{
    /**
     * constructeur de la classe Joueur
     */
    constructor($element){
        this.$element = $element;
        this.cote = 0;
        this.score = 0;
    }

    /**
     * Ajout du score pour chaque joueurs
     */
    ajoutScore(){
        this.score += 1;
        this.$element.slideUp(10);
        this.$element.text(this.score);
        this.$element.slideDown();
    }
}