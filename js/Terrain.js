//le terrain
class Terrain{
    constructor($html){
        this.$html=$html
        this.Largeur=$html.width();
        this.hauteur=$html.height();
              }
    }
let terrain=new Terrain($("#terrain"));