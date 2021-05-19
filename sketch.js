var cat;
var mouse;
var mouse_teasing, mouse_happy, mouse_normal;
var cat_running, cat_normal, cat_happy;
var garden, gardenImg;

function preload() {
    //load the images and animations here

    //Load the images and the animations of the cat
    cat_normal = loadImage("cat1.png");
    cat_happy = loadImage("cat4.png");
    cat_running = loadAnimation("cat2.png","cat3.png");

    //Load the images and the animations of the cat
    mouse_normal = loadImage("mouse4.png");
    mouse_teasing = loadAnimation("mouse2.png","mouse3.png");
    mouse_happy = loadImage("mouse1.png");

    //Load the background image
    gardenImg = loadImage("garden.png");
}

function setup(){
    createCanvas(1000,1000);
    //background
    background(255,255,255);
    garden = createSprite(500,500);
    garden.addImage(gardenImg);
    garden.scale = 1.5;

    //create tom and jerry sprites here
    cat = createSprite(800,650);
    cat.scale = 0.15;
    cat.setCollider("rectangle",0,0,500,500);

    mouse = createSprite(200,650);
    mouse.scale = 0.15;
    mouse.setCollider("rectangle",0,0,500,500);
  
}

function draw() {

    background(255);
    
    cat.addImage(cat_normal);
    mouse.addImage(mouse_normal);

    keyPressed();

    //Write condition here to evalute if tom and jerry collide
    if((cat.x-mouse.x)<(cat.width/2-mouse.width/2)){
        cat.addAnimation("happy",cat_happy);
        cat.changeAnimation("happy");
        mouse.addImage("happy",mouse_happy);
        mouse.changeAnimation("happy");

        cat.velocityX = 0;
        cat.scale = 0.25;
        mouse.velocityX = 0;
        mouse.y = 700;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
   if(keyDown(LEFT_ARROW)){
       mouse.addAnimation("teasing",mouse_teasing);
       mouse.changeAnimation("teasing");
       mouse.frameDelay = 25;

       cat.addAnimation("running",cat_running);
       cat.changeAnimation("running");
       cat.velocityX = -3;
   }

}
