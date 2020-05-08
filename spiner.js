class Spin {
    constructor(x,y,height,angle,ran) {
      var options = {
          isStatic: true,
          friction:1.0
      }
      this.body = Bodies.rectangle(x,y,20,height,options,angle);
      this.angle=angle;
      Matter.Body.setAngle(this.body,angle);
      this.width = 20;
      this.height =height;
      World.add(world, this.body);
      this.Visiblity=ran;
    }
    display(){
      if(this.body){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill(245);
      rectMode(CENTER);
      rect( 0, 0, this.width, this.height);
      pop();
    }
  }
  };
