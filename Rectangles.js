class Rectangle{
   constructor(x,y,w,h,r,d,f){
    var Option={
        restitution: r,
        density: d,
        friction: f
        
             }
             
        this.Body = Bodies.rectangle(x,y,w,h,Option)
          World.add(world,this.Body)
         this.w=w
         this.h=h

   }
display(){
   
    var angle = this.Body.angle;
    var pos = this.Body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(3);
    stroke('white')
    fill('yellow')
    rectMode(CENTER)
    rect(0, 0, this.w, this.h);
    pop();



}


}