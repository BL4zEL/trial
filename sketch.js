
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	background(0)
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    groundSprite=createSprite(width/2,675, width,10);
	groundSprite.shapeColor=color(255);
	ground = Bodies.rectangle(400, 570, 800, 10 , {isStatic:true} );
 	World.add(world, ground);
	bob1=new Ball (410,550,60)
	bob2=new Ball (490,550,60)
	bob3=new Ball (260,550,60)
	bob4=new Ball (290,550,60)
	bob5=new Ball (350,550,60)
	chain1 = new Rope(bob1.body,ground.body,-bob1.radius*4,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  drawSprites();
 
}



