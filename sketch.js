
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var bananaGroup
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,300)
  monkey=createSprite(50,200,20,20)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(200,250,800,10)
  ground.velocityX=-4
  
  bananaGroup=createGroup()
  obstacleGroup=createGroup()
}


function draw() {
background("lightblue")
  if(ground.x<0){
    ground.x=200
  }
  monkey.collide(ground)
  if(keyDown("space")){
    monkey.velocityY=-8
  }
  //gravity
  monkey.velocityY=monkey.velocityY+0.8
  
  spawnbanana()
  spawnobstacle()
 drawSprites(); 
}

function spawnbanana() {
  //write code here to spawn the banana
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //add each cloud to the group
    bananaGroup.add(banana);
  }
  
}
function spawnobstacle() {
  //write code here to spawn the obstacle
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(600,230,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
}



