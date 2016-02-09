window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cb, 17);};

var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" );

var interval = Math.floor(1000/60);

var particle1 = new Particle(ctx, 0, 0);
var particle2 = new Particle(ctx, 100, 5);

function Particle(ctx, x, y) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;
}

Particle.prototype.render = function() {
  this.updatePosition();
  this.draw();
};

Particle.prototype.draw = function() {
  ctx = this.ctx;
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect(this.x, this.y, 10, 20);
  ctx.fill();
  ctx.clothPath();
};

Particle.prototype.updatePosition = function() {
  this.x += 5;
  this.y += 5;
};

render();

function render() {
  ctx.clearRect(0, 0, 500, 500);

  particle1.render();
  particle2.render();

  requestAnimationFrame(render);
}
