class Player {
  constructor(num) {
    this.OnTile = null;
    switch (num) {
      case 1:
        this.image = "./image1.png";
        break;

      case 2:
        this.image = "./image2.png";
        break;

      default:
        this.image = "./image3.png";
        break;
    }
  }
}
class Tile {
  constructor(x, y) {
    this.X = x;
    this.Y = y;
    this.occupied = null;
    this.generateElement();
  }
  occupiedBy(player) {
    if (player.OnTile != null) player.OnTile.player = null;
    this.occupied = player;
    player.OnTile = this;
  }

  generateElement() {
    this.element = document.createElement("button");
    this.element.addEventListener("click", this.onClick.bind(this));
    this.element.classList.add("tile")
  }

  onClick() {
    alert("(" + this.X + "," + this.Y + ")");
  }
}
class Border{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.generateElement();
  }
  generateElement() {
    this.element = document.createElement("button");
    this.element.addEventListener("click", this.onClick.bind(this));
    this.element.classList.add("border")
  }
  
  onClick() {
    alert("border : ");
  }

}

Board = [];

function getTile(x, y) {
  return document.getElementById("game").childNodes[x].childNodes[y];
}


