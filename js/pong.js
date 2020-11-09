

let largeur=$("#ball").width();
let gauche=parseInt(($("#ball").css("left")));
let haut=parseInt(($("#ball").css("top")));


let i=0;
setInterval(function(){
    gauche = gauche + 1;
    haut = haut + 1;
    $("#ball").css("left",gauche);
    $("#ball").css("top",haut)
    if(gauche >= 600){
    }
    if (haut >= 400){
        
    }
}, 10);


//fichier Terrain.js
class Terrain{
    constructor($element){
        this.$element=$element
        this.Largeur="à vous de jouer";
        this.hauteur="à vous de jouer"; 

    }     

}
let terrein=new Terrain();
console.log(terrain);
