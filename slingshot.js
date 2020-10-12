class Slingshot {

    constructor(bodyA,pointB){

        var options={

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 2
        }
    
        this.object = Constraint.create(options);
 
	    this.sling1= loadImage("sprites/sling1.png")
	    this.sling2= loadImage("sprites/sling2.png")
	    this.sling3= loadImage("sprites/sling3.png")
	    World.add(world,this.object);
        this.pointB = pointB
    }

display(){
 if (this.object.bodyA){

   var a = this.object.bodyA.position;
var b = this.pointB;
push();

	 if(a.x>260)
		 strokeWeight(6);
	 else
	 	 strokeWeight(10);

	 stroke("#51250E");
    line(a.x-20,a.y,b.x-10,b.y);
	line(a.x-20,a.y,b.x+30,b.y); 
  image(this.sling3,a.x-30,a.y-10,15,30);
	 pop();
}

image(this.sling1,250,100,37,150);
image(this.sling2,230,98,31,91);

}

fly(){

	this.object.bodyA=null;

}


}
