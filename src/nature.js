export class Background {
  constructor() {
    this.img = new Image(2500,10000)
    this.img.src = 'assets/whale-olympics-background2.png';
  }

  draw(ctx, whale) {
    const img = this.img;
    let sx = whale.pos[0] % 5000
    let sy = whale.pos[1]
    let whiteSpace = 5000 - whale.pos[0] % 5000
    ctx.drawImage(img, sx, sy, ctx.canvas.width, ctx.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height)
    if (whiteSpace > 0 && whiteSpace < 575) {
      ctx.drawImage(img, 0, sy, ctx.canvas.width, ctx.canvas.height, whiteSpace, 0, ctx.canvas.width, ctx.canvas.height)
    }
  }
}
