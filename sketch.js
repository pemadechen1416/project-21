var car,wall,speed,weight,thickness,bullet;


function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,5)
  bullet.velocityX=3;
  bullet.shapeColor="red";
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor="green";
}

function draw() {
  background(255,255,255);  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damaged=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damaged>10){
      wall.shapeColor="orange";
    }
    if(damaged<10){
      wall.shapeColor="pink";
    }
  }
  
  drawSprites();
}
function hasCollided(lbullet, lwall) {
   bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
     if (bulletRightEdge>=wallLeftEdge) {
        return true; 
      } 
      return false;
       }