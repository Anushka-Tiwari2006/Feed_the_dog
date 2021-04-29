var dog,happyDog,database,foodS,foodStock,dataInfo,data;
var dImage,dImage2
var foodS = 15;
var back,mom,mImage,papa,pImage,baby,babyImg,boy,bImage;

function preload()
{
	dImage = loadImage("Dog.png");
  dImage2 = loadImage("happydog.png");
  mImage = loadImage("women3.png");
  fImage = loadImage("father3.png");
  bImage = loadImage("boy.png");
  babyImg = loadImage("baby.png");
  back = loadImage("back.jpg");
  
}

function setup() {
  database = firebase.database();

  foodStock = database.ref("food")
  foodStock.on("value",readStock)

	createCanvas(700,700);

  dog = createSprite(480,600,30,30);
  dog.addImage(dImage);
  dog.scale =0.2;

  papa = createSprite(350,400,30,30);
  papa.addImage(fImage);
  papa.scale =0.8;

  mom = createSprite(80,420,30,30);
  mom.addImage(mImage);
  mom.scale =0.7;

  baby = createSprite(100,600,30,30);
  baby.addImage(babyImg);
  baby.scale =0.5;

  boy = createSprite(300,600,30,30);
  boy.addImage(bImage);
  boy.scale =0.65;
}


function draw() {  
  background(back);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dImage2)



  }
  
  
  drawSprites();
  strokeWeight(2)
  stroke("white");
  textSize(24)
  fill("skyblue")
  text("Food Remaining:" + foodS, 280,50);
  
  //add styles here

}
function readStock(data){
  foodS = data.val()


}

function writeStock(x){

  if(x<=0){
    x=0;


  }
  else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })



}








