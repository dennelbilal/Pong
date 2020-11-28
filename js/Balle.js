
// classe  balle
class Balle{
    
    constructor($element){ 
        this.$element = $element;

        this.positionX = parseInt(this.$element.css("left"));
        this.positionY = parseInt(this.$element.css("top"));
        this.rayon = parseInt(this.$element.css("width"));

        this.vitesseXFacteur = 1;
        this.limiteFacteur = 8 

        this.vitesseXSens = this.calculAleatoire();
        this.vitesseYSens = (Math.random()*6) - 3; 
        

        this.vitesseYFacteur = 1;
        this.centreX = this.positionX;
        this.centreY = this.positionY

    }

    //getter and setter
    get bas() {
        return this.positionY + this.rayon;
    }
    get droite() {
        return this.positionX + this.rayon;
    }
    set bas(value) {
        this.positionY = value - this.rayon;
    }
    set droite(value) {
        this.positionX = value - this.rayon;
    }
    
    
    retourCentre(){
        this.positionX =  this.centreX;
        this.positionY =  this.centreY;
        this.vitesseXSens = this.calculAleatoire();
        this.vitesseXFacteur = 1;
        this.vitesseYSens = (Math.random()*6) - 3;
        this.vitesseYFacteur =1;
    }

    //fonction permettant de definir le sens de depart de la balle aléatoirement
    calculAleatoire(){
        return Math.random() < 0.5 ? 1 : -1;
    }

   
    calculVitesseX(){
       
        if (this.vitesseXFacteur < this.limiteFacteur){
            this.vitesseXFacteur +=1;
        }
        else {/*rien car la vitesse ne peux pas depasser la limite*/}
    }

    //fonction de calcul de deplacement
    bouger(terrain, joueur0, joueur1){
        this.positionX = this.positionX + (this.vitesseXFacteur * this.vitesseXSens);
        this.positionY += (this.vitesseYFacteur * this.vitesseYSens);
        this.rebond(terrain, joueur0, joueur1);
        this.rebondSurRaquette(raquetteDroite);
        this.rebondSurRaquette(raquetteGauche);
        this.majHTML();
    }

    
    majHTML(){
        this.$element.css("left",this.positionX);
        this.$element.css("top",this.positionY);
    }

    
    rebond(terrain, joueur0, joueur1){
        
        if(this.positionX <= 0 ||this.droite >= terrain.largeur){
            if(this.positionX <= 0){
                joueur1.ajoutScore();
                console.log("Le joueur de droite marque 1 point");
            }
            if(this.droite >= terrain.largeur){
                joueur0.ajoutScore();
                console.log("Le joueur de gauche marque 1 point");
            }
            
            terrain.$element.addClass("point");
            setTimeout(
                function(){
                    terrain.$element.removeClass("point");
                },350
            );
            this.retourCentre();
        }
       
        if(this.positionY <= 0 || this.bas >= terrain.hauteur){
            this.vitesseYSens = this.vitesseYSens * (-1);
            terrain.$element.addClass("fluo");
            setTimeout(
                function(){
                    terrain.$element.removeClass("fluo");
                },250
            );

        }
    
    }

    
    rebondSurRaquette(raquette){
        
        if(raquette.gauche){
            if ((this.positionY >= raquette.positionY)&&(this.positionY <= raquette.bas)){
                
                if (this.positionX<= raquette.droite){
                   this.positionX = raquette.droite + 1
                    this.vitesseXSens = this.vitesseXSens * (-1);
                  
                    raquette.$element.addClass("raquetteFluo");
                    setTimeout(
                    function(){
                        raquette.$element.removeClass("raquetteFluo");
                    },200
                    );
                    this.calculVitesseX();
                }
            }
        }
        //zone pour la raquette de droite
        else{
            if ((this.positionY >= raquette.positionY)&&(this.positionY <= raquette.bas)){
               
                if (this.droite > raquette.positionX){
                    this.droite = raquette.positionX- 1
                    this.vitesseXSens = this.vitesseXSens * (-1);
                   
                    raquette.$element.addClass("raquetteFluo");
                    setTimeout(
                    function(){
                        raquette.$element.removeClass("raquetteFluo");
                    },200
                    );
                    this.calculVitesseX();
                }
            }
        }
    }
}