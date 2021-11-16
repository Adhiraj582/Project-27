const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof (425,300,250,20);

	bobOb1 = new Ball (340,470,20)
	bobOb2 = new Ball (380,470,20)
	bobOb3 = new Ball (420,470,20)
	bobOb4 = new Ball (460,470,20)
	bobOb5 = new Ball (500,470,20);

	rope1= new Rope(bobOb1.body,roof.body,-40*2, 0);
	rope2= new Rope(bobOb2.body,roof.body,-20*2,0);
	rope3= new Rope(bobOb3.body,roof.body,-0*2,0);
	rope4= new Rope(bobOb4.body,roof.body,20*2,0);
	rope5= new Rope(bobOb5.body,roof.body,40*2,0);

	Engine.run(engine);

}


function draw() {
	rectMo=(CENTER);
	background(255);

	roof.display()
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	bobOb1.display();
	bobOb2.display();
	bobOb3.display();
	bobOb4.display();
	bobOb5.display();

}

function drawLine (constraint) {
	bobBodyPosition = constraint.bodyA.position;
	roofBodyPosition = constraint.bodyB.position;
	roofBodyOffset = constraint.pointB;
	roofBodyX= roofBodyPositiion.x + roofBodyOffset.x;
	roofBodyY= roofBodyPosition.y + roofBodyOffset.y;
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX, roofBodyY);
}

function keyPressed () {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bobOb1.body, bobOb1.body.position, {x: -50, y:-45});
	}
}
