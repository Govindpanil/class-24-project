class Dustbin{
    constructor(x,y,width,height){
        var options ={
            isStatic:true,
            "restitution":0,
            "friction":1,
            "density":1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height; 

        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER);
        fill("white");
        rect(this.body.position.X,this.body.position.Y,this.width,this.height)
    }
}