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

render();

function render() {
  ctx.clearRect(0, 0, 500, 500);

  updatePosition();
  draw(x, y);

  requestAnimationFrame(render);
}

function updatePosition() {
    x += 5;
    y += 5;
  }

function draw(posx, posy) {
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect(posx, posy, 100, 200);
  ctx.fill();
  ctx.closePath();
}
