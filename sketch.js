
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 

var b1,b2,b3,b4,b5,b6;
var roof;
var r1,r2,r3,r4,r5,r6;

function preload()
{
	
}

function setup() {
	createCanvas(1700,800);

	engine = Engine.create();
	world = engine.world;

  roof = new Roof(600,100,700,80);

	b1 = new Bob(390,450,100);
	b2 = new Bob(490,450,100);
	b3 = new Bob(590,450,100);
	b4 = new Bob(690,450,100);
  b5 = new Bob(790,450,100);
  //b6 = new Bob(8900,450,100);

  r1 = new Rope(b1.body, roof.body, -200, 0);
  r2 = new Rope(b2.body, roof.body, -100, 0);
  r3 = new Rope(b3.body, roof.body, 00, 0);
  r4 = new Rope(b4.body, roof.body, 100, 0);
  r5 = new Rope(b5.body, roof.body, 200, 0);
 //r6 = new Rope(b6.body, roof.body, -200, 0);
  


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#E6E6E6");
  

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  //b6.display();

  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();
  //r6.display();

  roof.display();

  drawSprites();
 
}



