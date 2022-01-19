var garden, rabbit, apple, redLeaf, orangeLeaf;
var gardenImg, rabbitImg, appleImg, orangeLeafImg, redLeafImg;

function preload(){
gardenImg = loadImage("garden.png");
rabbitImg = loadImage("rabbit.png");
appleImg = loadImage("apple.png");
orangeLeafImg = loadImage("orangeLeaf.png");
redLeafImg = loadImage("redImage.png"); 
}

function setup(){
createCanvas(400,400);
  
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit=createSprite(180,340,30,30);
rabbit.scale=0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
background(0);


//============================================ ERRO AQUI

rabbit.x=World.mouseX;

edges= createEdgeSprites();
rabbit.collide(edges);

spawnOrangeLeaf();
spawnRedLeaf();
spawnApple();


console.log(frameCount);
drawSprites();
}

function spawnOrangeLeaf(){
if (frameCount %60===0){
orangeLeaf=createSprite(200, 10, 10, 10);
orangeLeaf.addImage(orangeLeafImg);
orangeLeaf.scale=0.06;
orangeLeaf.x=Math.round(random(80, 320));
orangeLeaf.velocityY=4;
}
 }
function spawnRedLeaf(){
if (frameCount %80===0){
redLeaf=createSprite(200, 10, 10, 10);
redLeaf.addImage(redLeafImg);
redLeaf.scale=0.06;
redLeaf.x=Math.round(random(80, 320));
redLeaf.velocityY=4.3;
}
 }
function spawnApple(){
if(frameCount %120===0){
apple=createSprite(200, 10, 10, 10);
apple.addImage(appleImg);
apple.scale=0.06;
apple.x=Math.round(random(80, 320));
apple.velocityY=2.5;
}
 }
