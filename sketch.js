var bullet, wall, deformation, thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);
  bullet = createSprite(50, 200, 20, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color("80, 80, 80");
}

function draw() {
  background(0, 0, 0);
    if(wall.x - bullet.x <= 0 ){
      bullet.velocityX = 0;
      damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);
      if(damage > 3.68){
        bullet.shapeColor = "green" ;        
      }
      if(damage > 12.43){
        bullet.shapeColor = "red" ;        
      } 
    }
  drawSprites();
}