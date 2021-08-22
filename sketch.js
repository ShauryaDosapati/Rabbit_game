var garden,rabbit,apples,leafs
var gardenImg,rabbitImg;
var appleImg;
var leafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(200,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.position.x = mouseX;
  //rabbit.position.y = mouseY;
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spawnApples();
  spawnLeafs();
  drawSprites();
}


function spawnApples() {

  if(frameCount % 80 === 0){
    apple=createSprite(400,120,40,10);
    apple.lifetime = 40;
    apple.addImage(appleImg)
    apple.scale = 0.1;
    apple.velocityY = 3
    apple.x = Math.round(random(1,400))

  }
}
function spawnLeafs(){


  if(frameCount % 80 === 0){
    leaf=createSprite(400,120,40,10);
    leaf.lifetime = 45;
    leaf.addImage(leafImg)
    leaf.scale = 0.1;
    leaf.velocityY = 3
    leaf.x = Math.round(random(100,400))
}}