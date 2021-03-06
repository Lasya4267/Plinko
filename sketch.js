const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;

var particles = []
var divisions = []
var plinkos = []

var divisionHeight = 300;
var ground;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
	world = engine.world;

  ground = new Ground(width/2, height, width, 20)

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

    for (var j = 75; j <= width; j = j+50) {
      plinkos.push(new Plinko(j, 75));
      
    }

    for (var j = 50; j <= width - 10; j = j+ 50 ) {
      plinkos.push(new Plinko(j, 175));
      
    }
    

    for(var j = 75; j<=width; j = j + 50){
      plinkos.push(new Plinko(j, 275));
 }

    for(var j = 50; j<=width - 10; j = j + 50){
       plinkos.push(new Plinko(j, 375));
 }

    

  Engine.run(engine);
}

function draw() {
  background("black");  

  ground.display();
  
  for(var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  for(var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  if (frameCount%60===0) {
    particles.push(new Particles(random(width/2 - 10, width/2 + 10), 10, 10))
  }
  for(var i = 0; i<particles.length; i++){
    particles[i].display();
  }

  drawSprites();
}