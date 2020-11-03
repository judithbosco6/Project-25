class Dustbin{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution:0,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
            this.width=width;
            this.height=height;
            World.add(world,this.body);
            this.image=loadImage("dustbingreen.png")

        }
        display(){
            push();
            imageMode(CENTER);
            image(this.image,750,620,140,90);
            pop();

        }
    
}