//Create variables here
var dog, dogImg, happyDog, database, foodS, foodStock;

function preload()
{
  dogImg = loadImage('images/dogImg.png');
  happyDog = loadImage('images/dogImg1.png');
	//load images here
}

function setup() {
	createCanvas(displayWidth - 500, displayHeight - 100);
  dog = createSprite(350,250,10,10);
  dog.addImage(dogImg);
  database = firebase.database();
  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {  
 background(46, 139, 87);
 if(keyWentDown(UP_ARROW)){
  foodStock = foodStock - 1; 
  writeStock(foodS);
   dog.addImage(happyDog);
 }
  drawSprites();

  textSize(30);
  fill("red");
  stroke("black");
  text(foodStock, 50,550);
  text("To feed your pup, go up!", 550,100);


  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x - 1
  })
}
