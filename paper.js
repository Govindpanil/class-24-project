class paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            "restitution":0.3,
            "friction":0.5,
            "density":1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius=radius;
        

        World.add(world,this.body)
    }
    display(){
        ellipseMode(RADIUS);
        fill("yellow");
        rect(this.body.position.X,this.body.position.Y,this.radius)
    }
}