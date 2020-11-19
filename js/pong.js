
// Mouvement de la balle

let largeur = $("#balle").width();
let gauche = parseInt($("#balle").css("left"));
let haut = parseInt($("#balle").css("top"));


let raquetteA=new Raquette($("#raquetteA"))
raquetteA.descend();

let raquetteB=new Raquette($("#raquetteB"))
raquetteB.monte();

let terrain=new Terrain($("#terrain"))
console.log(terrain);

let balle=new Balle($("#balle"))
console.log(terrain);

setInterval(function () {
    
    balle.bouge();
    raquetteA.bouge();
    raquetteB.bouge();
}, 10);

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été enfoncée")
    event.preventDefault();
  }, true);
  
  window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été relachée")
    event.preventDefault();
  }, true);