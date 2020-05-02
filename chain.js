class chain {

    constructor(bodyA,bodyB){
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.04,
            length:10
        }
  this.chain=Constraint.create(options);
  World.add(world,this.chain);
    }
display (){
    var pos=this.chain.bodyA.position;
    var pos1=this.chain.bodyB.position;
    line(pos.x,pos.y,pos1.x,pos1.y);
}

}
