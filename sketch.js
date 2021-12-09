const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var mecanismo, mundo;
var box1, box2, box3, box4, box5, solo, pig1, pig2, log1, log2, log3, log4;

function setup() {
  var canvas = createCanvas(400, 400);

  mecanismo = Engine.create();
  mundo = mecanismo.world;
 
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  box3 = new Box(700,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(810,160,70,70);

  solo = new Ground(200,height,400,20);

  pig1 = new Pig(810,350);
  pig2 = new Pig(810,220);

  log1 = new Log(810,260,300,PI/2);
  log2 = new Log(810,180,300,PI/2);

  
  }
function draw(){
background(0);

Engine.update(mecanismo);

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
solo.display();
pig1.display();
pig2.display();
log1.display();
log2.display();
}