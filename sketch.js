const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var score=0;
var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var win=0;
var play=1;
var lose=2;
var a=1;
const density = 50;
let numRows = 300/density;
var gamestate="onsling"
//let numRows = 2;
function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;
    heroo=new hero(150,200,30,40);
    ground = new Ground(350,height,700,20);
    sling=new SlingShot(heroo.body,{x:200,y:250});
    spin=new Spin(500,320,100,PI/a,255);
    spin1=new Spin(700,100,200,PI/5,255);
    ground2=new Ground(1125,height,450,20,255);
    holder=new Spin(1050,height/2,230,PI/2,255);
    boxes=[];
    for (let i = 1; i < numRows; i++) {
      
        let y = i*density;
        boxes[i]=[]
        for (let j = 0; j < i; j++) {
         // boxes[i][j]=new Box(1050+ j*density - (i-1)*density/2, y, density, density);
          boxes[i][j]=new Box(1050+ j*density - (i-1)*density/2, y-150, density, density);
      }
      }
  
}

function draw(){
    background(255);
    strokeWeight(4);
    Engine.update(engine);
    if(heroo.body.position.x===400){
        holder.body=null;
       }
    if(heroo.body.position.x>220){
        slide=new Spin(800,355,80,-PI/3);
        slide.display();
       }
       for (let i = 1; i < numRows; i++) {
       for (let j = 0; j < i; j++) {
       boxes[i][j].display();
       boxes[i][j].score();
       }
    }
    noStroke();
    textSize(35);
    fill(0);
    text("Score"+score,width-250,50);
    stroke(0);
    heroo.display();
    sling.display();  
    ground.display();
    spin.display();
    ground2.display();
    spin1.display();
    fill("red");
    strokeWeight(0);
    rect(800,height,200,20);
}
function mouseDragged() {
    if (gamestate!=="launched"){
        Matter.Body.setPosition(heroo.body, {x: mouseX , y: mouseY});
    }
}
function mouseReleased() {
    sling.fly();
    gamestate="launched"
}
function keyPressed() {
          if (keyCode === 32) {
            heroo=new hero(150,200,30,40);
            sling.attach(heroo.body);
            gamestate="onsling";
        }       
      }