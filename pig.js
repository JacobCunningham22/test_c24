class Pig{
contructor (x,y){
    var options= {
        'restitution' :0.8,
        'friction' :0.3,
        'density' :1.0
    }
    this.body = body.rectangle(x,y,width,height,options);
    this.width = 50;
    this.height = 50

    world.add(world, this.body);

}
display(){
     push()
    translate(this.body.position.x, this.body.position.y)
    rotate(this.body.angle);
    rectMode(CENTER);
    fill("lightgreen")
    rect(0,0,this.width,this.height);
    pop();
}
}
