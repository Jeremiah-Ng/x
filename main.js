
/*created by prashant shukla */
var difficulty="";
var paddle2 =10,paddle1=10;

var paddle1X = 10,paddle1Height = 170;
var paddle2Y = 685,paddle2Height = 100;

var score1 = 0, score2 =0;
var paddle1Y;
var i=0
var  playerscore =0;
var audio1;
var pcscore =0;
var time1=0;
var counter = 0;
var timeTotal=0;
var inst = setInterval(change, 1000);
function change() {
    if(time1==winTime){
      time1=time1
    if(time1==winTime && difficulty=="Easy"){
      fill("#20d444");
      stroke(0)
      rect(0,0,width,height-1);
      fill("white");
      stroke("white");
      textSize(25)
      text("You Won!",width/2,height/2);
      text("You survived 40 seconds in easy difficulty!",width/2,height/2+30)
      noLoop();
      pcscore = 0;
    }
    else if(time1==winTime && difficulty=="Medium"){
      fill("#20d444");
      stroke(0)
      rect(0,0,width,height-1);
      fill("white");
      stroke("white");
      textSize(25)
      text("You Won!",width/2,height/2);
      text("You survived 35 seconds in medium difficulty!",width/2,height/2+30)
      noLoop();
      pcscore = 0;
    }
    else if(time1==winTime && difficulty=="Hard"){
      fill("#20d444");
      stroke(0)
      rect(0,0,width,height-1);
      fill("white");
      stroke("white");
      textSize(25)
      text("You Won!",width/2,height/2);
      text("You survived 30 seconds in hard difficulty!",width/2,height/2+30)
      noLoop();
      pcscore = 0;
    }
    
    else if(time1==winTime && difficulty=="Insane"){
      fill("#20d444");
      stroke(0)
      rect(0,0,width,height-1);
      fill("white");
      stroke("white");
      textSize(25)
      text("You Won!",width/2,height/2);
      text("You survived 25 seconds in insane difficulty!",width/2,height/2+30)
      noLoop();
      pcscore = 0;
    }
    else if(time1==winTime && difficulty=="Impossible"){
      fill("#20d444");
      stroke(0)
      rect(0,0,width,height-1);
      fill("white");
      stroke("white");
      textSize(25)
      text("What...",width/2,height/2);
      text("How did you survive that???",width/2,height/2+30)
      text("You survived 15 seconds in IMPOSSIBLE difficulty???",width/2,height/2+60)
      noLoop();
      pcscore = 0;
    }
  }
  else{
    time1=time1+1
    timeTotal=timeTotal+1
    counter++;
  }
}
var winTime=10000;
var finalTime=0;
var timeTotal=0;
//ball x and y and speedx speed y and radius
var ball = {
    x:350/2,
    y:Math.floor(Math.random()*481),
    r:20,
    dx:3,
    dy:3
}

function setup(){
  var canvas =  createCanvas(700,600);
  // canvas.center();
  canvas.parent("canvas");
  // canvas.hide();
  missed=loadSound("missed.wav");
  hit=loadSound("ball_touch_paddel.wav")
  hit.setVolume(0.1)
}


function draw(){

 background(0); 

 fill("black");
 stroke("black");
 rect(680,0,20,700);

 fill("black");
 stroke("black");
 rect(0,0,20,700);
 
   //funtion paddleInCanvas call 
   paddleInCanvas();
 
   //left paddle
   fill(250,0,0);
    stroke(0,0,250);
    strokeWeight(0.5);
   paddle1Y = mouseY; 
   rect(paddle1X,paddle1Y,paddle1,paddle1Height,100);
   
   
    //pc computer paddle
    fill("#FFA500");
    stroke("#FFA500");
   var paddle2y =ball.y-paddle2Height/2;  
   rect(paddle2Y,paddle2y,paddle2,paddle2Height,100);
    //function midline call
    midline();
    
    //funtion drawScore call 
   drawScore();
   
   //function models call  
   models();
   
   //function move call which in very important
    move();
    

}



//function reset when ball does notcame in the contact of padde
function reset1(){
   ball.x = 350/2,
   ball.y = Math.floor(Math.random()*481);
   ball.dx=4;
   ball.dy =3;
   for(i=0; i<4; i++){
   time1=0;
   loop();
   }
}
function reset(){
  ball.x = 350/2,
  ball.y = Math.floor(Math.random()*481);
  ball.dx=4;
  ball.dy =3;
  for(i=0; i<4; i++){
  time1=0;
  timeTotal=0;
  loop();
  }
}
function resetdiff(){
  ball.x = 350/2,
  ball.y = Math.floor(Math.random()*481);
  ball.dx=4;
  ball.dy =3;
 //  for(i=0; i<4; i++){
  time1=0;
 //  }
 timeTotal=0;
 pcscore=0;
}


//function midline draw a line in center
function midline(){
    for(i=0;i<480;i+=10) {
    var y = 0;
    fill("white");
    stroke(0);
    rect(width/2,y+i,10,480);
    }
}


//function drawScore show scores
function drawScore(){
    textAlign(CENTER);
    textSize(20);
    fill("white");
    stroke(250,0,0)
    text("Player:",100,50)
    text(playerscore,140,50);
    text("Computer:",500,50)
    text(pcscore,555,50)
}


//very important function of this game
function move(){
   fill(50,350,0);
   stroke(255,0,0);
   strokeWeight(0.5);
   ellipse(ball.x,ball.y,ball.r,20)
   ball.x = ball.x + ball.dx;
   ball.y = ball.y + ball.dy;
   if(ball.x+ball.r>width-ball.r/2){
       ball.dx=-ball.dx-1;       
      //  hit.play();
   }
  if (ball.x-2.5*ball.r/2< 0){
  if (ball.y >= paddle1Y&& ball.y <= paddle1Y + paddle1Height) {
    ball.dx = -ball.dx+1; 
    hit.play();
  }
  else if(pcscore ==3){
    finalTime=timeTotal;
      fill("#FFA500");
      stroke(0)
      rect(0,0,width,height-1);
      fill("white");
      stroke("white");
      textSize(25)
      text("Ded",width/2,height/2);
      text("You survived for a total of "+timeTotal+" seconds",width/2,height/2+30)
      noLoop();
      pcscore = 0;
  }
  else{
    missed.play();
    pcscore++;
    reset1();
    // navigator.vibrate(100);
  }
}
// if(pcscore ==2){
//   finalTime=time;
//     fill("#FFA500");
//     stroke(0)
//     rect(0,0,width,height-1);
//     fill("white");
//     stroke("white");
//     textSize(25)
//     text("Ded",width/2,height/2);
//     text("You survived for "+time+" seconds",width/2,height/2+30)
//     noLoop();
//     pcscore = 0;
// }
   if(ball.y+ball.r > height || ball.y-ball.r <0){
       ball.dy =- ball.dy;
   }   
}


//width height of canvas speed of ball 
function models(){
    textSize(18);
    fill(255);
    noStroke();
    text("Width:"+width,135,15);
    text("Speed:"+abs(ball.dx),50,15);
    text("Height:"+height,235,15)
    text("Time:"+time1,395,15)
    text("Total Time:"+timeTotal,490,15)
}


//this function help to not go te paddle out of canvas
function paddleInCanvas(){
  if(mouseY+paddle1Height > height){
    mouseY=height-paddle1Height;
  }
  if(mouseY < 0){
    mouseY =0;
  }  
}
function drop(){
  document.getElementById("dropdowns").style.visibility="visible";
  document.getElementById("dropdowns").style.height="";
  document.getElementById("reeses").innerHTML="<button class='btn btn-info dropdown-toggle' onclick='close1()'>"+difficulty+" Difficulty ▲</button>"
}
function close1(){
  document.getElementById("dropdowns").style.visibility="hidden";
  document.getElementById("dropdowns").style.height="0px";
  document.getElementById("reeses").innerHTML="<button class='btn btn-info dropdown-toggle' onclick='drop()'>"+difficulty+" Difficulty ▼</button>"
}
function easy(){
  paddle1Height=300;
  resetdiff();
  close1();
  difficulty="Easy"
  document.getElementById("reeses").innerHTML="<button class='btn btn-info dropdown-toggle' onclick='drop()'> Easy Difficulty ▼</button>"
  winTime=40;
}
function medium(){
  paddle1Height=170;
  resetdiff();
  close1();
  difficulty="Medium"
  document.getElementById("reeses").innerHTML="<button class='btn btn-info dropdown-toggle' onclick='drop()'> Medium Difficulty ▼</button>"
  winTime=35;
}
function hard(){
  paddle1Height=100;
  resetdiff();
  close1();
  difficulty="Hard"
  document.getElementById("reeses").innerHTML="<button class='btn btn-info dropdown-toggle' onclick='drop()'> Hard Difficulty ▼</button>"
  winTime=30;
}
function insane(){
  paddle1Height=75;
  resetdiff();
  close1();
  difficulty="Insane"
  document.getElementById("reeses").innerHTML="<button class='btn btn-info dropdown-toggle' onclick='drop()'> Insane Difficulty ▼</button>"
  winTime=25;
}
function impossible(){
  paddle1Height=20;
  resetdiff();
  close1();
  difficulty="Impossible"
  document.getElementById("reeses").innerHTML="<button class='btn btn-info dropdown-toggle' onclick='drop()'> Impossible Difficulty ▼</button>"
  winTime=20;
}
medium();
