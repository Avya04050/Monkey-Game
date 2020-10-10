
var monkey , monkey_running
var ground, ground2
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {

  
  monkey=createSprite(60,320,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale=0.1;
  
  
  ground=createSprite(200,360, 400,10);
  ground.velocityX=-3;
  
  ground2=createSprite(600,360, 400,10);
  ground2.velocityX=-3;
   
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
  survivalTime=0;
  score=0;
  
}


function draw() {
  background(255);
  
  if(ground.x<0){
    ground.x =200;
  }
  if(ground2.x<400){
    ground2.x=600;
  }
  if(keyDown("space") && monkey.y>300){
    monkey.velocityY=-12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);


  
  growBananas();
  createObstacles();
  
  
  
  drawSprites();
  
  //survivalTime=Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME : "+survivalTime, 140, 100);
 
  survivalTime=Math.ceil(frameCount/frameRate());
  
}

function growBananas(){
  if(frameCount%100===0){
  banana=createSprite(390, 200, 10, 10);
  var rand=Math.round(random(200, 280));
  banana.y=rand;
  banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.velocityX=-3;
    banana.lifetime=140;
    bananaGroup.add(banana);
}
}
function createObstacles(){
  if(frameCount%300===0){
  obstacle=createSprite(390, 340, 10, 10);
  obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
   obstacle.velocityX=-3;
    obstacle.lifetime=140;
    obstacleGroup.add(obstacle);
}
}






