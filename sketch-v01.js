var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg,apple;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}

function setup(){
  console.log('inside setup func.. ---');
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

  
rabbit = createSprite(mouseX,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  spawnApples();
  drawSprites();
}

function draw() {
  createCanvas(400,400);
  

  edges= createEdgeSprites();
  
  
  
  background(0);
  console.log('inside rabbit draw ---');
  //creating boy running
  
rabbit.collide(edges);
}



