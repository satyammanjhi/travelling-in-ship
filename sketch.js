var ship,shipimg,seaimg,sea ;

function preload(){
 shipimg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

 seaimg=loadImage("sea.png");
}

function setup(){
  createCanvas(1000,400);
  sea=createSprite(200,10,400,20);
  sea.addImage("ground",seaimg);

  ship=createSprite(200,200,20,50);
  ship.addAnimation("running",shipimg);

  ship.scale=0.5;
 
  sea.velocityX=-2;
  
}

function draw() {
  background("blue");
 
if (sea.X > 0){
  sea.X = sea.width/2;
}

  drawSprites();
}