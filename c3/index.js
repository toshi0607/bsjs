var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" );

var interval = Math.floor(1000/60);

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cb, 17);};

var x = 5;
var y = 5;

draw();

function draw() {
  ctx.clearRect(0, 0, 500, 500);

  x += 5;
  y += 5;
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect(x, y, 100, 200);
  ctx.fill();
  ctx.closePath();

  requestAnimationFrame(draw);
}
