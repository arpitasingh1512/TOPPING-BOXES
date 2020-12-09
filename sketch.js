// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box1;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;


  box1 = new Box(100,100,70,70);
  box2 = new Box(150,150,100,70);
  ground = new Ground(200,390,400,20);

}

function draw() {
  background(0); 
  Engine.update(engine);
  
  box1.display();
  box2.display();
  ground.display();
}