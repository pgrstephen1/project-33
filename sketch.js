
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = [];
var divisions = [];
var plinkos = [];

var divisionHeight = 300;

var ground;

var score = 0;

var particle;

function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,795,480,10);
}

function draw() {
  background("black");  

  ground.display();

  textSize(20);
  text("SCORE: " + score, 20, 20);

  for(var i = 0; i < plinkos.length; i++){
    plinkos[i].display();
  }
 
  for(var i = 0; i < divisions.length; i++){ 
    divisions[i].display();
  }

  for(var i = 0; i <=480; i = i + 80){
  divisions.push(new Division(i, 800-divisionHeight/2, 10, divisionHeight));
}

for(var i = 40; i <=480; i=i+50){
  plinkos.push(new Plinko(i,75));
}

for(var i = 15; i <=480; i=i+50){
  plinkos.push(new Plinko(i,175));
}

for(var i = 40; i <=480; i=i+50){
  plinkos.push(new Plinko(i,275));
}

if(particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if(particle.body.position.x < 80){
      score = score+500;
      particle=null
    }
  }
}

if(particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if(particle.body.position.x > 80 && particle.body.position.x<160){
      score = score+500;
      particle=null
    }
  }
}

if(particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if(particle.body.position.x > 160 && particle.body.position.x<240){
      score = score+100;
      particle=null
    }
  }
}
if(particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if(particle.body.position.x > 240 && particle.body.position <320){
      score = score+100;
      particle=null
    }
  }
}
if(particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if(particle.body.position.x > 320 && particle.body.position <400){
      score = score+200;
      particle=null
    }
  }
}
if(particle!=null){
  particle.display();

  if(particle.body.position.y>760){
    if(particle.body.position.x > 400 && particle.body.position.x<480){
      score = score+200;
      particle=null
    }
  }
}

}

function mousePressed(){
if(keyCode === 32){
  particle = new Particle(240,0,20);
}
}

