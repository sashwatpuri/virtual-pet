//Create variables here
var dog , happydog , dogImg ; 
var database ; 
var foodS, foodStock ; 

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happydog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500 , 500);

  database = firebase.database();

  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.5 ; 

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
  
  
}


function draw() {  

  background(46, 139, 87);

  if(keyWentDown(38)){
    writeStocks(foodS);
    dog.addImage(happydog);

  }

  drawSprites();
  //adding styles here
  fill("red");
  textSize(20);
  text("PRESS UP_ARROW TO FEED THE DOG",90,50);
  

}

function readStock(data)
{
  foodS=data.val();
}

  function writeStocks(x){

  if(x<=0){
    x=0
  }
  else{
    x=x-1
  }

  database.ref('/').update({
    Food:x
  })
}

