
function constrain(a,b,c){
	if(a<b){
		a = b;
	}
	if(a>c){
		a = c
	}
	return a;
}

var palet = ["blue", "orange", "red", "lightblue", "aqua", "purple", "powderblue"];

function Particle(x,y){
	this.x = x;
	this.y = y;
	this.r = Math.random()*3;
	this.mass = (Math.random()*10);
	this.color = palet[Math.floor(Math.random()*palet.length)];
	this.pos = {
		x: this.x,
		y: this.y
	};
	this.vel = {
		x:(Math.random()-0.5)*2,
		y:1//(Math.random()-0.5)
	}
	this.acc = {
		x:0,
		y:0
	}
	

	this.update = function(){
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.vel.x += this.acc.x;
		this.vel.y += this.acc.y;
	}
	this.show = function(){
		c.beginPath();
		c.fillStyle = this.color;
		c.arc(this.pos.x,this.pos.y,this.r,0,Math.PI*2,false);
		c.fill();
	}
	this.attracted = function(target){
		var vx = target.x-this.pos.x;
		var vy = target.y-this.pos.y;
		var dir = {
			x : target.x-this.pos.x,
			y : target.y-this.pos.y,
			ux:(target.x-this.pos.x)/(Math.sqrt(Math.pow(vx,2)+Math.pow(vy,2))),
			uy:(target.y-this.pos.y)/(Math.sqrt(Math.pow(vx,2)+Math.pow(vy,2)))
		}
		var dsq = Math.pow(Math.sqrt(Math.pow(dir.x,2)+Math.pow(dir.y,2)),2);
		dsq = constrain(dsq,100,200);
		var G = 6.67;
		var mag = (G*this.mass)/dsq;
		dir.x = dir.ux*mag;
		dir.y = dir.uy*mag;
		this.acc.x = dir.x;
		this.acc.y = dir.y;

	}

}