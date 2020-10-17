
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1050,500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,200,30);
	groundObject=new Ground(width/2,470,width,17);
	garbage1=new Garbage(900,375,20,170);
	garbage2=new Garbage(700,375,20,170);
	garbage3=new Garbage(800,450,218,20);
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  paperObject.display();
  groundObject.display();
  garbage1.display();
  garbage2.display();
  garbage3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:40,y:-40});

  
	}
}


