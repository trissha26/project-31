const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var particles = [];
var plinko = [];
var divisions = [];
var divisionHeight = 300;


function setup() {
  createCanvas(500,800);

  Engine.update(engine);

  engine = Engine.create();
  world = Engine.world();

  for (var k = 0; k <=width; k - k + 80){
    divisions.push(new divisions(k, height-divisionHeight/2, 10, divisionHeight))
}

  for(j = 40 ; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 75)); 
  }
  for(j = 15 ; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175)); 
  }
  for(j = 10 ; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 275)); 
  }
  for(j = 5 ; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 375)); 
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10, 10));
  }

  

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  

  for(var l = 0 ; l <particles.length; l++){
    particles[l].display();
  }
  for(var k = 0 ; k <divisions.length; k++){
    particles[k].display();
 }
  for(var j = 0 ; j <plinkos.length; j++){
    particles[j].display();
 }


  drawSprites();
}