class Restricao{
    cosntructor(bodyA,bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness:0.04,
            length: 10
        }

       this.restri = Constraint.create(options);
       World.add(world);

    }
       display() {
           var pointA = this.restri.bodyA.position;
           var pointB = this.restri.bodyB.position;
        strokeWeight(3);
           line(pointA.x, pointA.y,pointB.x,pointB.y)
       }

}