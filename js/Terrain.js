//le terrain
class Terrain{
    constructor($html){
        this.$html=$html
        this.Largeur=$("#terrain").width();
        this.hauteur=$("#terrain").height();
              }
    }
let terrain=new Terrain($("#terrain"));
console.log(terrain);