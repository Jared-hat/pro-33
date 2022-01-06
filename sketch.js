const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var snow2=[];
var maxSnow=20;
var edges;
var snow1;
var snowArray ;
var bkimg;

function preload(){

bkimg=loadImage("snow2.jpg")
}
function setup(){
  createCanvas(windowWidth,windowHeight);
  edges=createEdgeSprites();
  engine=Engine.create();
  world=engine.world;
}
function draw(){
  background(bkimg);
  Engine.update(engine)
  drawSprites()
  if(frameCount%20===0){
    snow1=new Snow(random(10,width-10),random(10,50),60)
  snowArray.push(snow1)
  }
  for (var i=0;i<snowArray.lenght;i++){
snowArray[i].display()
  }

}
/*function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  if(frameCount%15000===0){
    for(var i=0;i<maxSnow;i++){
      snow2.push(new Snow(random(0,800),random(0,400),100,100))
    }
  }
*
}

function draw() {
  background(bkimg);
  Engine.update(engine)
  if(frameCount%5===0){
    snow2.push(snow4=new Snow());
  }
  for(var i=0;i<maxSnow;i++){
    snow2[i].display()
    snow2[i].updateY()
  }
  
}*/