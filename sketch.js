const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bgImg;
var bro, me, broImg, meImg;

function setup() {
  createCanvas(800,400);
  bgImg  = loadImage("snow2.jpg");

  bro = createSprite(200, 300, 5, 5);
  broImg = loadImage("winterboy.png");
  bro.addImage(broImg);
  bro.scale = 0.4;

  me = createSprite(600, 300, 5, 5);
  meImg = loadImage("wintergirl.png");
  me.addImage(meImg);
  me.scale = 0.4;
}

function draw() {
  background(bgImg);  

  if(keyCode === LEFT_ARROW){
		bro.x = bro.x-20;
	}
  bro.x= bro.x;

	if(keyCode === RIGHT_ARROW){
		bro.x = bro.x+20;
	}
  
  bro.display();
  me.display();

  drawSprites();
}