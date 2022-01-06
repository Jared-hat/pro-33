class Snow{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, radius, options);
        //this.width = width;
        this.radius = radius;
        this.image = loadImage("snow4.webp");
        World.add(world, this.body);
      }
      /*updateY(){
          if(this.body.position.y>height){
              Matter.Body.setPosition(this.body,{x:random(0,800),y:0})
          }
      }*/
      display(){
          var pos=this.body.position
          var angle=this.body.angle
          push()
          translate(pos.x,pos.y) 
          rotate(angle)
        imageMode(CENTER);
        image(this.image, 0,0, this.radius);
        pop()
      }
}