const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, invisibleground, player;

var gameState = 0;

var gameState1 = "play";

var counter = 30;

var ammoIMG, NoAmmoIMG, road, creeper, background1;

var ammo1;

var monsterGroup;

var zombies;

var ammoGroup;

var ammobox;

var lives = 3;


function preload(){
  ammoIMG = loadImage("Ammo.png");
  NoAmmoIMG = loadImage("Man with no ammo.png");
  road =  loadImage("Road1.png");
  creeper = loadImage("Creeper.png");
  background1 = loadImage("bb.jpg");
  ammobox = loadImage("ammo (2).png");
}

function setup() {

	engine = Engine.create();
	world = engine.world;


  createCanvas(1000,600);

  ground = createSprite(950,595,displayWidth*5, 15);

  invisibleground = createSprite(950,600,displayWidth*5, 15);

  invisibleground.visible = false;
  
  player = createSprite(120, 590, 25, 25);
  ammo = createSprite(100, 555, 10, 10);

  player.addImage(ammoIMG);
  player.scale = 0.3;

  ground.addImage(road);

  monsterGroup = new Group();
  ammoGroup = new Group();
  reloadGroup = new Group();
  


}

function draw() {
  background(background1); 

  

  /*if(keyDown("DOWN_ARROW")){
    player.y = player.y + 5
  }*/

  platform();

  fill("red");
  textSize(120)

  text("LIVES :" + lives, displayWidth/2 - 675, 300)

  //fill("black");
textSize(50)
text("Ammo's Left:" +counter, displayHeight/2 - 200, 50)

  if(gameState1 = "play"){

  player.velocityY = player.velocityY + 1;

  player.collide(invisibleground);
  

  if(keyDown("UP_ARROW") && player.y > 500){
    player.velocityY = -14 ;
  }

  if(keyDown("LEFT_ARROW")){
    player.x = player.x - 5
  }

  if(keyDown("RIGHT_ARROW")){
    player.x = player.x + 5
  }

  
  
  if(gameState === 0){
  ammo.x = player.x;
  ammo.y = player.y;

  player.addImage = (NoAmmoIMG, "ammo2");
  }

  if(keyDown("Space") && counter>0){
    gameState = 1;
    ammo.velocityX = 10;
    ammo1 = createSprite(player.x + 40, player.y-5, 10, 10);
    ammo1.shapeColor = "green";
    ammo1.velocityX = 10;

    ammoGroup.add(ammo1);
    counter--;

    

    //player.addImage = (NoAmmoIMG);
  }

  else if(counter < 0){
    ammo1.velocityX = 0;
    
  }
  


  if(ammoGroup.isTouching(monsterGroup)){
    monsterGroup.destroyEach();
    ammoGroup.destroyEach();
  }
  


if(player.isTouching(monsterGroup)){
  lives--
  monsterGroup.destroyEach();
}

if(player.isTouching(reloadGroup)){
  counter = counter + 10;
  reloadGroup.destroyEach();
}




ground.velocityX = -10;

if(ground.x < 0){
  ground.x = ground.width/2;
}

if(monsterGroup.x <0){
  monsterGroup.destroy();
}

  }






if(lives <= 0 ){
  gameState1 = "end"
  monsterGroup.destroyEach();

  reloadGroup.destroyEach();


  text("Game Over", displayWidth/2 - 675, 500)
}
  
  drawSprites();
}



function platform(){

  
  if (frameCount%70 === 0) {
    zombies =  createSprite(1100, 550, 150, 20);
    zombies.addImage(creeper);
    zombies.scale = 0.3
     
    zombies.velocityX = -10;

    monsterGroup.add(zombies);   
  }

  if (frameCount%200 === 0) {
    reload =  createSprite(1100, 400, 50, 40);
    reload.addImage(ammobox);
    reload.scale = 0.3
     
    reload.velocityX = -10;

    reloadGroup.add(reload);   
  }
}

