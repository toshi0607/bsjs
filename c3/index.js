window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function(cb) {setTimeout(cb, 17);};

var canvas = document.getElementById( "canvas" );
var ctx = canvas.getContext( "2d" );
var NUM = 20;
var particles = [];

canvas.width = canvas.height = 500;

for(var i = 0; i < NUM; i++) {
  positionX =  Math.random()*120; // X座標を0-20の間でランダムに
  positionY =  Math.random()*20; // Y座標を0-20の間でランダムに
  particle = new Particle(ctx, positionX, positionY);
  particles.push( particle );
}

function Particle(ctx, x, y) {
  this.ctx = ctx;
  this.x = x || 0;
  this.y = y || 0;
  this.v = {
    x: Math.random() * 10-5,
    y: Math.random() * 10-5
  };
}

Particle.prototype.render = function(){
  this.updatePosition();
  this.wrapPosition();
  this.draw();
};

Particle.prototype.draw = function(){
  // 4. 描画
  ctx = this.ctx;
  ctx.beginPath();
  ctx.fillStyle = "#99ff66";
  ctx.rect( this.x, this.y, 4, 4 ); // 位置指定
  ctx.fill();
  ctx.closePath();
};

Particle.prototype.updatePosition = function() {
  // 3. 位置をずらす
  this.x += this.v.x;
  this.y += this.v.y;
};

Particle.prototype.wrapPosition = function() {
  if(this.x < 0 ) this.x = 500;
  if(this.x > 500 ) this.x = 0;
  if(this.y < 0 ) this.y = 500;
  if(this.y > 500 ) this.y = 0;
};

// 1.図形を描画
// 描画サイクルを開始する
render();

function render() {
  // 2.一度消去
  ctx.clearRect(0,0,500,500); // 前回までの描画内容を消去

  // 配列の各要素の関数renderを実行して図形を描画
  particles.forEach(function(e){ e.render(); });

  // 5.一定間隔をおく
  // requestanimationframeをつかって、ブラウザの更新のタイミングに実行する
  requestAnimationFrame( render );
}
