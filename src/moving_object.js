
export class MovingObject {
  constructor(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.game = obj.game;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      750,
      1000,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

}
