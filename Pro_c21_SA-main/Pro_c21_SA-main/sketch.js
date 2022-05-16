const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var bola;
var up_button;
var right_button;



function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  up_button = createImg("up.png");
  up_button.position(20,30);
  up_button.size(50,50);
  up_button.mouseClicked(vForce);

  right_button = createImg("right.png");
  right_button.position(220,30);
  right_button.size(50,50);
  right_button.mouseClicked(hForce);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  
  var bola_options = {
    restitution: 0.85
  }


  bola = Bodies.circle(200,100,20,bola_options);
  World.add(world,bola);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ellipse(bola.position.x, bola.position.y, 20);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
}

function hForce() {

  Matter.Body.applyForce(bola,{x:0, y:0},{x:0.05, y:0});

}

function vForce() {

  Matter.Body.applyForce(bola,{x:0, y:0},{x:0, y:-0.05});

}




