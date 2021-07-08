
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     Paper = new paper(100,600,10);
	 ground = new Ground(400,680,800,20);
	 leftside = new Dustbin(550,620,20,100);
	 bottom = new Dustbin(610,660,100,20);
	 rightside = new Dustbin(679,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  Paper.display();
  ground.display();
  leftside.display();
  bottom.display();
  rightside.display();

  keyPressed();

  drawSprites();
  
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:15, y:-15})
	}
}

