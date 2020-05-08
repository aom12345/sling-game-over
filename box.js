class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.6,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.Visiblity=255;
        this.image=loadImage("sling3.png");
      }
      display(){
          //console.log(this.body.speed);
          if(this.body.speed<6){
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
          }
          else{
            World.remove(world,this.body);
            push();
            this.Visiblity=this.Visiblity-10;
            tint(255,this.Visiblity);
            image(this.image,this.body.position.x,this.body.position.y,50,50);
          pop();
          }
        }
        score(){
          if(this.Visiblity<0&&this.Visiblity>-1005){
            score++;
          }
        }
      }