class Rope {
    constructor(bodyA,bodyB,offSetX,offSetY){
      this.offSetX=offSetX
      this.offSetY=offSetY
  var options={
    bodyA:bodyA,
    bodyB:bodyB,
    pointB:{x:this.offSetX,y:this.offSetY},
    length:100,
    stiffness:0.1,
  }
 this.chain=Constraint.create(options)
World.add(world,this.chain);
    }
display(){
    var pointA =this.chain.bodyA.position
    var pointB =this.chain.bodyB.position
    strokeWeight(4);
    strokeColor("white")
    var anchor1x = pointA.x
    var anchor2x = pointB.x+this.offSetX
    var anchor1y = pointA.y+this.offSetY
    var anchor2y = pointB.y
line(anchor1x,anchor2x,anchor1y,anchor2y)



}

}