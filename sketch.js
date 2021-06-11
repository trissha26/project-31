const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var b1, b2, b3, b4;


function setup() {
  createCanvas(500,800);

 

  engine = Engine.create();
  world = engine.world;
 

  b1 = new Ground(250, 790, 500, 20);
  b2 = new Ground(495, 400, 20, 800);
  b3 = new Ground(5, 400, 20, 800);
  

 for (var k = 0; k <=width; k = k + 80){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=width; k = k + 160){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=width; k = k + 240){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=width; k = k + 320){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=width; k = k + 400){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=width; k = k + 480){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=width; k = k + 560){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=width; k = k + 640){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

for (var k = 0; k <=width; k = k + 720){
  divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
}

  for(j = 40 ; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 75)); 
  }
  for(j = 15 ; j <=width-10; j=j+50){
    plinkos.push(new Plinko(j, 175)); 
  }
  for(j = 40 ; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 275)); 
  }
  for(j = 15 ; j <=width; j=j+50){
    plinkos.push(new Plinko(j, 375)); 
  }

  
}

function draw() {
  background(0);  

  Engine.update(engine);

  for(var k=0;k<divisions.length;k++){ 
    divisions[k].display(); 
  } 
  for(var j=0;j<plinkos.length;j++){ 
    plinkos[j].display(); 
  } 
  for(var j=0;j<plinkos.length;j++){ 
    plinkos[j].display(); 
  } 
  for(var j=0;j<plinkos.length;j++){ 
    plinkos[j].display(); 
  } 
  for(var j=0;j<plinkos.length;j++){ 
    plinkos[j].display(); 
  } 
  for(var l=0;l<particles.length;l++){ 
    particles[l].display(); 
  } 
  
  if(frameCount%60===0){ 
    particles.push(new Particles(random(width/2-10,width/2+10),10,10)); 
  
  } 

  b1.display();
  b2.display();
  b3.display();

  drawSprites();

}


 
  


  

