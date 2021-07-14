const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, Cannon;




function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  tower = new Tower(100, 250, 160, 310);
 Cannon = new cannon( 120, 100, 200, 100 ); 
  
}

function draw() {
  background(189);
  image(backgroundImg, 600, 200, 1200,600);


  Engine.update(engine);
  
  

  tower.display();
  
  Cannon.display();
}







