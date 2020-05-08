class hero{
    constructor(x, y, width, height) {
        var options = {
            'restitution':1.01,
            'friction':0,
            'density':1.0,
            'inertia':Infinity,
            'frictionAir':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("blue");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      }
      win(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("red");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
      }
}