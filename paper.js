class Paper{
    constructor(x,y){
        var options={
            restitution:0.9,
            friction:0.8,
            density:3,
            isStatic:false
        }

        this.body=Bodies.circle(x,y,20,options)
        this.radius=25*2
        this.image=loadImage("paper.png")
    
        World.add(world,this.body)
    }


   display(){
    var pos = this.body.position   
    push()
    translate(pos.x,pos.y)
    rotate(this.body.angle)
    imageMode(CENTER)
    strokeWeight(3)
    stroke("broun")
    fill("white")
    image(this.image,0,0,this.radius,this.radius)
    pop()
   }

}