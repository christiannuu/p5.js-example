window.alert("Finally opened something dumbass");

function setup() {
    createCanvas (500, 300);
  
}

function draw(){
    background(220);
    circle(width/2, height/2, 50);
    circle((width/2)+50, height /2, 50);
    circle(width/2, (height /2)-50, 50);
}

