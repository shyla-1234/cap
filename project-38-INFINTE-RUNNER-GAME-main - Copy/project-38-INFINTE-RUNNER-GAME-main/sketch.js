var th,thImg,thsGroup;
var climber,climberImg,climbersGroup;
var cap ,capImg ,invisibleBlockGroup;
var invisibleBlock,ba,baImg;
var gameState="Play";
function preload(){
  baImg=loadImage("ba.jpg");
  thImg =loadImage("th.png");
  capImg=loadImage("cap.png");
  climberImg=loadImage("climber.png");
 // spookySound=loadSound("spooky.wav");
}
function setup (){
  createCanvas (600,600);
  //spookySound.loop();
  ba=createSprite(300,300);
  ba.addImage("ba",baImg);
  ba.velocityY=1;
  thsGroup=new Group();
  climbersGroup=new Group();
  invisibleBlockGroup= new Group();
  cap=createSprite(200,200,50,50);
  cap.scale=0.3;
  cap.addImage("cap",capImg);
  
  
}
function draw(){
  background (0);
  if (gameState==="Play"){
    if(keyDown("left")){
      cap.x=cap.x-3;
      
    }
    if(keyDown("right")){
      cap.x=cap.x+3;
      
    }
    if(keyDown("space")){
      cap.velocityY=-10;
    }
    cap.velocityY=cap.velocityY+0.8;
    if(ba.y>400){
      ba.y=300;
    }
    spawnths();
    if(climbersGroup.isTouching(cap)){
      cap.velocityY=0;
    }
    if (invisibleBlockGroup.isTouching(cap)||
        cap.y>600){
      cap.destroy();
      gameState="end";
        }
    drawSprites();  
  }
  if(gameState==="end"){
    stroke("yellow");
    fill("red");
    textSize(30);
    text("GAMEOVER😥",200,200);
  }

}
function spawnths(){
  if(frameCount % 240 === 0){
    var th=createSprite(200,-50);
    var climber=createSprite(200,10);
    var invisibleBlock=createSprite(200,15);
    invisibleBlock.width=climber.width;
    invisibleBlock.height=2;
    th.x=Math.round(random(120,400));
    climber.x=th.x;
    invisibleBlock.x=th.x;
    th.addImage(thImg);
    
    climber.addImage(climberImg);
    
    th.velocityY=1;
    climber.velocityY=1;
    invisibleBlock.velocityY=1;
    cap.depth=th.depth;
    cap.depth+=1;
    
    
    
    th.lifetime=800;
    climber.lifetime=800;
    invisibleBlock.lifetime=800;
    thsGroup.add(th);
    invisibleBlock.debug=true;
    climbersGroup.add(climber);
    invisibleBlockGroup.add(invisibleBlock);
    
  }
}

