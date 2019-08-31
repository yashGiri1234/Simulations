var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var xlim = canvas.width;
var ylim = canvas.height;
var c = canvas.getContext('2d');


var attractor1 = {

	x:480,
	y:ylim/2

};

var attractor2 = {

	x:500,
	y:ylim/2

};

var attractor3 = {

	x:undefined,
	y:undefined

};

window.addEventListener('mousemove',function(event){
	attractor3.x = event.x;
	attractor3.y = event.y;
});

var at = [attractor1, attractor2];

var particle = [];

for(var i = 0; i<= 500; i++){

	particle.push(new Particle(490, (ylim/2)));

}

function Att(){

	c.beginPath();
	c.fillStyle = "yellow";
	c.arc(attractor1.x, attractor1.y, 2, 0, Math.PI*2, false);
	c.arc(attractor2.x, attractor2.y, 2, 0, Math.PI*2, false);
	c.fill();

}

function ani(){

	c.fillStyle = "rgba(0, 0, 0, 0.5)";
	c.fillRect(0, 0, xlim, ylim);
	c.fill();
	Att();

	for(var i = 0; i<= 500; i++){

		for(var j = 0;j<=at.length-1; j++){

			var part = particle[i];
			part.attracted(at[j]);
			part.update();

		}
					part.show();


	}

	requestAnimationFrame(ani);
}
ani();