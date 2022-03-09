var jack,jack2;
var platform,platform2;
var jack_image, platform_image;
var platform1,platform2,platform3,platform4,platform5,platform6;

function preload(){
  jack_image=loadImage("images/jack2.png")
  
 
platform1 = loadImage("images/platform1.png")
platform2 = loadImage("images/platform2.png")
platform3 = loadImage("images/platform3.png")
platform4 = loadImage("images/platform4.png")
platform5 = loadImage("images/platform5.png")
platform6 = loadImage("images/platform6.png")

}


function setup() {
  createCanvas(500, 500);
  jack = createSprite(250,300,20,50);
  jack.addImage("jack",jack_image)

  platform = createSprite(250,350,100,10);
  platform.addImage("platform", platform3)
  platform.scale=0.1
  
}

function draw() {
  background('#F2F5B6');
     
  
  if(keyDown("up"))
  {
    jack.velocityY=-10
  }

  if(keyDown("left"))
  {
    jack.x = jack.x - 7;
  }

  if(keyDown("right"))
  {
    jack.x = jack.x + 7;
  }

  jack.velocityY = jack.velocityY +0.8;
  jack.collide(platform)

  spawnPlatform();

  drawSprites();
}

function spawnPlatform(){

  if(frameCount % 60 ==0){
  
    var platforms = createSprite(250,0,50,50);
  platforms.velocityY = 4;

  var r = Math.round(random(1,6))
  switch (r){
    case 1 : platforms.addImage(platform1);
    break;
    case 2 : platforms.addImage(platform2);
    break;
    case 3 : platforms.addImage(platform3);
    break;
    case 4 : platforms.addImage(platform4);
    break;
    case 5 : platforms.addImage(platform5);
    break;
    case 6 : platforms.addImage(platform6);
    break;
  }
  platforms.collide(jack);
  platforms.scale = 0.1;

  platforms.x = random(0,500);
  }
}
