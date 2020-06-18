class Pen{
    constructor (x,y,radius){
        var options={
          
           isStatic:true
        
    }
        
        this.body=Bodies.circle(x,y,radius,options);
      this.radius=radius;
      World.add(world,this.body);
      
    }
     display () {
         var posi=this.body.position;
         rectMode(CENTER);
        fill ("green");
         circle (posi.x,posi.y,this.radius);
         
     }



}



