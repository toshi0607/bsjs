var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" );

var interval = Math.floor(1000/60);

window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cb, 17);};

var x1 = 5;
var y1 = 5;
var x2 = 100;
var y2 = 5;

render();

function render() {
  ctx.clearRect(0, 0, 500, 500);

  updatePosition();
  draw(x1, y1);
  draw(x2, y2);

  requestAnimationFrame(render);
}

function updatePosition() {
    x1 += 5;
    y1 += 5;
    x2 += 5;
    y2 += 5;
  }

function draw(posx, posy) {
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect(posx, posy, 10, 20);
  ctx.fill();
  ctx.closePath();
}
