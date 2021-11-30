const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mecanismo, mundo;
var box1, box2, solo;

function setup() {
  var canvas = createCanvas(400, 400);

  mecanismo = Engine.create();
  mundo = mecanismo.world;
 
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);

  solo = new Ground(200,410,400,20);
  
  }
function draw(){
background(0);

Engine.update(mecanismo);

box1.display();
box2.display();
}