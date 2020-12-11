const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var score=0
function preload(){

  frogup=loadImage("frogger1.png")
  frogright=loadImage("frogger2.png")
  frogleft=loadImage("frogger3.png")

  bus1=loadImage("bus1.png")

}

function setup() {
  createCanvas(800,500);
  engine = Engine.create();
  world = engine.world;

  background("white");
  this.input=createElement()
  this.input.html("𝓕𝓻𝓸𝓰𝓰𝔂");
  this.input.style('font-size', '150px');
  this.input.position(450, 150);

  this.greeting=createElement()
  this.greeting.html("press space to start")
  this.greeting.style('font-size', '50px');
  this.greeting.position(560,400)

  st=createSprite(260,480,1290,60)
 st.visible=false
  st1=createSprite(260,300,1290,60)
  st1.visible=false

  river=createSprite(260,200,1290,160)
  river.shapeColor="blue"
  river.visible=false

  land =createSprite(260,100,1290,50)
  land.shapeColor="lightgreen"
  land.visible=false

  bg=createSprite(200,390,1200000000000090,120)
  bg.shapeColor="black"
  bg.visible=false
 // bg.velocityX=-3

  frog=createSprite(200,480,20,20)
  frog.addImage(frogup)
  frog.scale=0.1
  frog.visible=false
  frog.velocityX=0

 busgro=new   Group ()
}


function draw() {
  
  Engine.update(engine);
  frog.velocityX=0
  frog.velocityY=0

  //background("white")
  if(keyDown("space")){
    this.input.hide()
    this.greeting.hide()
   // background("white")
  /* st.visible=true
    st1.visible=true*/
  
    
   textSize(40)
    fill ("black")
    text("INSTRUCTIONS",300,100)
    text("To play the game, use the arrow keys on \nyour keyboard to guide a frog character\n across the animated road and river \nto reach it's home \n The player must avoid the vehicles and\n the snakes  ",30,200)
   
    textSize(20)
   fill("yellow")
    text("press s to start",300,470)
  }
  
  if(keyDown("RIGHT_ARROW")){
    frog.addImage(frogright)
    frog.velocityX=3
  }

  if(keyDown("LEFT_ARROW")){
    frog.addImage(frogleft)
    frog.velocityX=-3
  }

  if(keyDown("UP_ARROW")&&(frog.y>100)){
    frog.addImage(frogup)
    frog.velocityY=-3
  }

  if(keyDown("DOWN_ARROW")&&(frog.y<=490)){
    frog.addImage(frogup)
    frog.velocityY=3
  }
 
vehicles()

  drawSprites();
}

function vehicles(){

  if(keyDown("s")){
    background("black")
    //background.velocityX=2
    river.visible=true
    land.visible=true
    st.visible=true
    st1.visible=true
    frog.visible=true
    bg.visible=true

    
  if(frameCount%160==0){

    bus=createSprite(100,350,20,10)
    bus.addImage(bus1)
    bus.scale=0.1
    bus.velocityX=3
    busgro.add(bus)
     
   
//  bus.visible=false
  }

  }
  
}