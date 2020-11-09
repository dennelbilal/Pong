

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
    constructor(){
        this.Largeur=0;
        this.hauteur=0; 

    }     

}
let terrein=new Terrain();
console.log(terrain);
