var bg, backgroundImg; 
var gym_1, gym_2, bath;
var sleep, brush, eat, drink, move;
var astronaut;
var edges;

function preload() {
  backgroundImg = loadImage("images/iss.png");
  gym_1 = loadAnimation("images/gym1.png", "images/gym2.png");
  gym_2 = loadAnimation("images/gym11.png", "images/gym12.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  eat = loadAnimation("images/eat1.png", "images/eat2.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
  move = loadAnimation("images/move.png","images/move.png","images/move1.png", "images/move1.png");
  bath = loadAnimation("images/bath1.png", "images/bath2.png");

}

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  /*bg = createSprite(370,200);
  bg.addImage("ship", backgroundImg);
  bg.scale = 0.12*/

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(backgroundImg); 

  drawSprites();
  fill(255);
  textSize(20)
  text("Instructions: ",80, 20);

  
  textSize(15);
  fill(255);
  text("Up Arrow = Brushing ", 80, 40);
  text("Down Arrow = Gymming ", 80, 55);
  text("Left Arrow = Eating ", 80, 70);
  text("Right Arrow = Bathing ", 80, 85);
  text("m key = Moving ", 80, 100);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymning", gym_1);
    astronaut.changeAnimation("gymning");
    astronaut.y = 300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 300;
    astronaut.velocityX=0.5;
    astronaut.velocityY=0.5;
  }

  if(keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("m")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    //astronaut.y = 300;
    astronaut.velocityX= 1;
    astronaut.velocityY= 1;
  } 
}