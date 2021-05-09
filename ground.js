class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
	
		this.body=Bodies.rectangle(x, y, w, h , options);
		this.w=w
		this.h=h
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		

			push()
			rectMode(CENTER)
			fill(255,255,0)
			rect(groundPos.x, groundPos.y, this.w, this.h);
			pop()
			
	}

}