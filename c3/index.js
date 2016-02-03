var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" );

ctx.beginPath();
ctx.fillStyle = "red";
ctx.rect( 0, 0, 100, 200 );
ctx.fill();
ctx.closePath();
