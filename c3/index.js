var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" );

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc( 100, 100, 40, 0, Math.PI * 2 );
ctx.fill();
ctx.closePath();
