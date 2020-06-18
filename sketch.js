const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;

var ground,ground1;
var slingshot;
function preload(){
  back=loadImage("war.jpg");
}

function setup() {
  createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;

  ground1=new Pen (700,420,100);
  fall1=new Fall(300,300,60,60);
  fall2=new Fall(300,200,60,60);
  fall4=new Fall(100,200,60,60);
  fall3=new Fall(200,90,60,60);
   box1=new Box (700,460,100,20);
   box2=new Box (700,440,100,20);
   
  
   ground=new Ground (200,500,1200,30);
   
   }

function draw() {
  background(back);  
  Engine.update(engine);
  fill ("yellow");
  rect(620,390,70,20);
  ground1.display();
   fall1.display();
   fall2.display();
   fall3.display();
   fall4.display();
   box1.display();
   box2.display();
   ground.display();
}   




  
    
    