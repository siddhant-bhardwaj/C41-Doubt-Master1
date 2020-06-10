var playerCar;
var computerCar;
var enmyCar;
var playerCar_image;
var computerCar_image;
var enmy_image;
var background;
var background_image;


function preload(){
   playerCar_image = loadImage("images/car1.png");
   computerCar_image = loadImage("images/car2.png");
   enmyCar_image = loadImage("images/car4.png");
   background_image = loadImage("images/track.png");


}


function setUp(){
 
 createCanvas(400,400);

var background = createSprite(400,600);
background.velocityY = -5;
background.setImage(background_image);


   var playerCar = createSprite(20,20,200,200);
   playerCar.setImage(playerCar_image);
   computerCar = createSprite(20,20,150,200);
   computerCar.setImage(computerCar_image);
  computerCar.y = playerCar.y;
  enmyCar.setImage(enmyCar_image);
}


function draw(){
  
 if(background.y<450){
background.y = background.y+200;

 }


     if(keyDown(LEFT_ARROW)){
       playerCar.x+=10;
     }

     if(keyDown(RIGHT_ARROW)){
      playerCar.x-=10;
    }
  
  EnmyCars();
  
  drawSprites();
  
  
}


function EnmyCars(){

  if(World.frameCount % 100 === 0) {
    var enmyCar = createSprite(200,10,10,40);
    enmyCar.velocityY = -5;
   
    
    //generate random obstacles
    var rand = random(1,400);
   enmyCar.x = rand;
    
    //assign scale and lifetime to the obstacle           
    
    enmyCar.lifetime = 70;
  }
}
  
  
  
  


