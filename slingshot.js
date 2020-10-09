class Slingshot {

    constructor(bodyA,pointB){

        var options={

            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            lenght: 2
        }
    
        this.object = Constraint.create(options);
        World.add(world,this.object);
        this.pointB = pointB
    }

display(){
 if (this.object.bodyA){

    strokeWeight(5);

   var a = this.object.bodyA.position;
   var b = this.pointB;
    
    line(a.x,a.y,
        b.x,b.y)
  
}
}

fly(){

	this.object.bodyA=null;

}


}
