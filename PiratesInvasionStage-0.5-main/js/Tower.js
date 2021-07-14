class Tower  { 
constructor(x,y,width,height) { 

  var options ={
  isStatic:true
};
this.image=loadImage("assets/tower.png"); 
this.height =height; 
this.width = width; 
this.body= Bodies.rectangle(x,y,this.width,this.height, options); 

World.add(world, this.body);
} 
display() {

  var angle = this.body.angle; 
  var pos = this.body.position; 
 imageMode(CENTER);
 image(this.image, pos.x,pos.y, this.width, this.height); 

}






}