const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bird, slingShot;


function setup(){
    var canvas = createCanvas(2000,750);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,700,70,70);
    box2 = new Box(700,700,70,70);
    box3 = new Box(700,700,70,70);
    box4 = new Box(700,700,70,70);
    box5 = new Box(700,700,70,70);
    box6 = new Box(700,700,70,70);
    box7 = new Box(700,700,70,70);
    box8 = new Box(700,700,70,70);
    box9 = new Box(700,700,70,70);
    box10 = new Box(700,700,70,70);
    boxextra1 = new Box(800,700,70,70);
    boxextra2 = new Box(800,700,70,70);
    
    var options = {
        'restitution':1,
        'friction':0,
        'density':0.6
    }
    boll= Bodies.rectangle(200,250,80,80,options) 
    World.add(world, boll);

    slingshot = new SlingShot(boll,{x:550, y:100});
}

function draw(){
    background("silver");
    Engine.update(engine);

    ellipse(boll.position.x,boll.position.y,80,80)

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display;
    boxextra1.display();
    boxextra2.display();
    
    
    
    slingshot.display();    
}

