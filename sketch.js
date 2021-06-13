const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mago10;
var world,boy;
var stone;

function preload(){
	boy=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1000,100,30);
	mango2=new mango(1200,160,30);
	mango3=new mango(1100,200,30);
	mango4=new mango(1100,100,30);
	mango5=new mango(900,220,30);
	mango6=new mango(1100,250,30);
	mango7=new mango(1000,250,30);
  mango8=new mango(980,180,30);
  mango9=new mango(1220,225,30);
  mango10=new mango(1070,40,30)

	treeObj=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);

	stone = new Stone(220,400,40,40);
	
  rope =new Rope(stone.body,{x: 240 , y: 420});
	
	Engine.run(engine);
}

function draw() {

  background(230);
  Engine.update(engine);
  //Add code for displaying text here!
  text("press the space key to play again!",10,10)
  image(boy ,200,340,200,300);
  
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();

  stone.display();

  rope.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
    rope.fly();
}
function keyPressed(){
  if(keyCode === 32){
    rope.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  MangoBodyPosition = lmango.body.position;
  StoneBodyPosition = lstone.body.position;

  var distance = dist(StoneBodyPosition.x,StoneBodyPosition.y,MangoBodyPosition.x,MangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body,false);
  }
}