var astronaut;
var bg, bgImage;
var astronaut, sleepImg, eatImg, brushImg, gymImg, drinkImg, bathImg;

function preload() {
  bgImage = loadImage("images/iss.png");
  sleepImg = loadAnimation("images/sleep.png");
  eatImg = loadAnimation("images/eat1.png", "images/eat2.png");
  brushImg = loadAnimation("images/brush.png");
  gymImg = loadAnimation("images/gym11.png", "images/gym12.png");
  drinkImg = loadAnimation("images/drink1.png", "images/drink2.png");
  bathImg = loadAnimation("images/bath1.png", "images/bath2.png");
}

function setup() {
  createCanvas(1000, 500);

  bg = createSprite(500, 250, 1000, 500);
  bg.addImage(bgImage);

  astronaut = createSprite(500,200);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale = 0.1;

  //eat = createSprite(350,350);
  //eat.addAnimation("eating",eatImg);
  //eat.scale = 0.1;

  //brush = createSprite(500,300);
  //brush.addAnimation("brushing",brushImg);
  //brush.scale = 0.1;  

 // gym = createSprite(500,340);
 // gym.addAnimation("gymming",gymImg);
 // gym.scale = 0.1;

  //drink = createSprite(350,350);
  //drink.addAnimation("drinking",drinkImg);
  //drink.scale = 0.1;
    
 // bath = createSprite(500,350);
 // bath.addAnimation("bathing",bathImg);
 // bath.scale = 0.1;

   // move = createSprite(500,350);
   // move.addAnimation("moving",moveImg);
   // move.scale = 0.1;
}

function draw() {
  background(255,255,255);  

  if(keyDown("UP_ARROW")) {
     astronaut.addAnimation("brushing", brushImg);
     astronaut.changeAnimation("brushing");
     astronaut.y = 350;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")) {
     astronaut.addAnimation("gymming", gymImg);
     astronaut.changeAnimation("gymming");
     astronaut.y = 350;
     astronaut.x = 600;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")) {
     astronaut.addAnimation("eating", eatImg);
     astronaut.changeAnimation("eating");
     astronaut.y = 350;
     astronaut.x = 350;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")) {
     astronaut.addAnimation("bathing", bathImg);
     astronaut.changeAnimation("bathing");
     astronaut.y = 350;
     astronaut.x = 650;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
  }

  if(keyDown("D")) {
     astronaut.addAnimation("drinking", drinkImg);
     astronaut.changeAnimation("drinking");
     astronaut.y = 360;
     astronaut.x = 300;
     astronaut.velocityX = 0;
     astronaut.velocityY = 0;
  }

  if(keyDown("S")) {
    astronaut.addAnimation("sleeping", sleepImg);
    astronaut.changeAnimation("sleeping");
    astronaut.y = 200;
    astronaut.x = 500;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  drawSprites();
}