var maxdrops=100;

function preload(){
    
}

function setup(){
    for(var i=0; i<maxdrops; i++){
        drops.push(new createDrop(random(0,400), random(0,400)));
    }
    friction: 0.1
   
    
}

function draw(){
    if(this.position.y >height){
        Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
    }
}   

