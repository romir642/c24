const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var secondBody;
var firstBody;
function setup(){

    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    firstBody = new Rectangle(200,400,20,50,0.9,0.5,2)
   secondBody = new Rectangle(400,300,30,60,0.7,0.2,3)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    hammer.display();
   firstBody.display()
  secondBody.display()
plane.display();
 
}