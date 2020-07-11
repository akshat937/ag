class Chain {

     constructor(objectA,objectB){

        var options = {
            bodyA : objectA,
            bodyB : objectB,
            lenght : 10,
            stiffness : 0.05
        }

        this.chain = Constraint.create(options);
        World.add(world,this.chain)

     }

     display(){
     var pointA = this.chain.bodyA.position
     var pointB = this.chain.bodyB.position
     strokeWeight(5);
     line(pointA.x,pointA.y,pointB.x,pointB.y)

     

     }
}