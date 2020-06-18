class Fall  {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          
          
      }
      
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      Matter .Body.setVelocity(this.body,{x:0,y:5});
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      if(pos.y>700){
        pos.y=700-pos.y;
        Matter .Body.setVelocity(this.body,{x:0,y:5});
      }
      push();
      translate(pos.x, pos.y);
     
      rectMode(CENTER);
      fill("red");
      rect(0, 0, this.width, this.height);
          
            
      pop();
    }
  };
  