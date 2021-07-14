class cannon { 
constructor(x,y,width,height, angle) { 
var options ={ 
isStatic: true };
this.image = loadImage("assets/cannon_base.png"); 
this.image1 = loadImage("assets/CANON.png");
this.x=x; 
this.y=y; 
this.width = width; 
this.height = height; 
this.angle= angle; 

this.body = Bodies.rectangle(x,y, this.width, this.height, options); 
World.add(world, this.body); 
}

display() { 

    if(keyIsDown("UP_ARROW") && this.angle < 0.35 ) { 
this.angle += 0.02
    
    }

    if(keyIsDown("DOWN_ ARROW") && this.angle > -1.45){ 
this.angle += 0.02
    }
var pos = this.body.position; 
var angle = this.body.angle; 
push();
imageMode(CENTER); 
image(this.image, pos.x, pos.y, this.width, this.height); 
image (this.image1, pos.x, pos.y, this.width, this.height);
pop();
rotate(this.angle); 


}

}
