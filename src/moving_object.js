
export class MovingObject {
  constructor(obj) {
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.game = obj.game;
  }

  draw(ctx) {
    let width = 115;
    let height = 49.61;

    let img = new Image(width,height)
    img.src = '/Users/c/workspace/whale-olympics/assets/narwhal.png'
    let rad = this.angle * Math.PI / 180
    ctx.translate(50,50)
    ctx.rotate(rad)

    ctx.drawImage(img, 0, 65, 255,110,-width/2,-height/2, width, height)

    ctx.rotate(-rad)
    ctx.translate(-50,-50)
  };
}
