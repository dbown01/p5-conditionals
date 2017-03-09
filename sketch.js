var x = 0;
var speed = 7;
function setup(){
    createCanvas(600,400);
}

function draw(){
      background(50); 
      
      //i wrote this so backgrund changes to blue when clicked
      if(mouseIsPressed){
          background(75,0,130);
      }
      
      //makes outline white, 6px thick, no color inside shapes 
      stroke(255);
      strokeWeight(4);
      
      if(mouseY<150){
          fill(218,165,32);
      }
      else{
          noFill();
      }
      
      
      //a rectangle
      rect(x,100,100,100);
      
      //this code is going to get the rectangle to move on its own
      if(x>width || x<0){
          console.log("RECTANGLE IS OFF THE SCREEN!!!")
          speed = speed * -1;
      }
    
      x = x + speed;
      console.log(x);
    }