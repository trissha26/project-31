class Plinko{
    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:1,
            friction:0,
        }
         this.body = Bodies.circle(x,y,0.5,options);
         
         this.x = x;
         this.y = y;
         this.r = 10;
         World.add(world,this.body);
         

    }
    
    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        
        
    }
}