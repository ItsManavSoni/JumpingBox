var redBox, blueBox, greenBox, yellowBox 
var movingBox
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingBox= createSprite(random(10,750), 300, 20, 20)
    movingBox.shapeColor="white";
    movingBox.velocityX=3;
    movingBox.velocityY=3;

    redBox=createSprite(100,590,180,20);
    redBox.shapeColor="red";

    greenBox=createSprite(300,590,180,20);
    greenBox.shapeColor="green";

    blueBox=createSprite(500,590,180,20);
    blueBox.shapeColor="blue";

    yellowBox=createSprite(700,590,180,20);
    yellowBox.shapeColor="yellow";
    //create box sprite and give velocity

}

function draw() {
    background(rgb(10,10,10));
    edges = createEdgeSprites ();
    movingBox.bounceOff (edges)
      if(isTouching(movingBox,greenBox)&& movingBox.bounceOff(greenBox)){
        movingBox.shapeColor="green";
        //bounceOff(movingBox,greenBox)
      }
      else if(isTouching(movingBox,blueBox)&& movingBox.bounceOff(blueBox)){
        movingBox.shapeColor="blue";
        //bounceOff(movingBox,blueBox)
      }  
      else if(isTouching(movingBox,yellowBox)&& movingBox.bounceOff(yellowBox)){
        music.play()
        movingBox.shapeColor="yellow";
        //bounceOff(movingBox,yellowBox)
        
      }  
      else if(isTouching(movingBox,redBox)&& movingBox.bounceOff(redBox)){
        music.stop()
        movingBox.shapeColor="red";
        //bounceOff(movingBox,redBox)
      }   
        drawSprites()
    }
