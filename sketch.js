
function preload(){
  playerHi=loadAnimation("shi1.png","shi2.png","shi3.png","shi4.png","shi5.png","shi6.png","shi7.png","shi8.png","shi9.png","shi10.png","shi11.png","shi12.png","shi13.png","shi14.png","shi15.png","shi16.png","shi17.png","shi18.png","shi19.png","shi20.png",)
}
function setup() {
  createCanvas(800,400);
  player=createSprite(400, 200, 50, 50);
  player.addAnimation("Idle",playerHi)
player.scale=0.5
}

function draw() {
  background(255,255,255); 

drawSprites();
}
