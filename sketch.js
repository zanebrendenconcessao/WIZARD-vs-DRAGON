  var cave,caveImage;

  var wizard,wizardImage;

  var dragon,dragonImage,dragonGroup;
  var diamond,diamondImage,diamondGroup;

  var score=0;

  var gamestate="play";
  var play=1;
  var end=0;

var backgroundsound;



  function preload(){
  caveImage=loadImage("cave interior background by sketcheth digital art drawings paintings.jpg")
  wizardImage=loadImage("5a576a301c992a034569ab72.png")
  dragonImage=loadImage("clipart1711498.png")
  diamondImage=loadImage("rijrdbr8T.png") 
backgroundsound=loadSound("2019-05-09_-_Escape_Chase_-_David_Fesliyan.mp3")

    

  }


  function setup(){
  
  backgroundsound.loop() ; 
    
  cave=createSprite(700,300);
  cave.addImage(caveImage);
  cave.velocityX=-2;
    
  
    
  wizard=createSprite(60,300)  
  wizard.addImage(wizardImage)
  wizard.scale=0.2;  

    dragonGroup= new Group();
    diamondGroup = new Group();
    
    

  score=0;  
  }

  function draw(){
    
  if(keyDown("space")){
        gamestate="play";
      }   

  background(0);  

  if(gamestate==="play"){
 
    
    

    if(diamondGroup.isTouching(wizard)){
    score=score+1;
  }
    if(dragonGroup.isTouching(wizard)){
      gamestate=end;
    }

  if(cave.x<0){
    cave.x=cave.width/2;
  }

  dragonGroup=new Group();
  diamondGroup=new Group();  

  enemy();
  jewel();

  wizard.y=mouseY;
  wizard.x=mouseX;
  }


    if(gamestate==="end"){
     
    dragonGroup.destroyEach();
    diamondGroup.destroyEach();

    diamondGroup.velocityX=0;
    dragonGroup.velocityX=0;
    cave.velocityX=0;   
    
      
      
  }  





  drawSprites();  
  text("score"+score,50,50) 
  text.size=30;  
  }




  function enemy(){
   if(frameCount%90==0){
    dragon=createSprite(210,100);
    dragon.addImage(dragonImage);
    dragon.scale=0.2;
   dragon.velocityX=-6;
    dragon.y=Math.round(random(100,120))
    dragon.lifeTime=6; 
    dragonGroup.add(dragon)  
  }
  }

  function jewel(){
    if(frameCount%80==0){
      diamond=createSprite(320,90)
      diamond.addImage(diamondImage)
      diamond.scale=0.1;
      diamond.velocityX=-5;
      diamond.x=Math.round(random(100,120))
      diamond.lifeTime=6;
      diamondGroup.add(diamond)
    }
  }




















