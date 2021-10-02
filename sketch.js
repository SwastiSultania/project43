var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;
}

function draw() {
  background(bg);
  

  if(!hasDocked){

    spacecraft = spacecraft.x + random(-1,1);
    
    
  if(keyDown("UP_ARROW")){
    spacecraft.addImage(spacecraft.png);
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft3.png);
    spacecraft.x = spacecraft.x - 1;
  }
    
  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft2.png);
    spacecraft.x = spacecraft.x + 1;
  }
    
  if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft1.png);
  }
}

  if(spacecraft.y <= (iss.y+180) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
   }

   if(spacecraft.y <= (iss.y-70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
   }

   if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
    fill("white")
     text("Docking UnSuccessful!", 200, 300);
   }

   if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
     hasDocked = true;
     textSize(25);
    fill("white")
     text("Docking Successful!", 200, 300);
   }

  drawSprites();
}

