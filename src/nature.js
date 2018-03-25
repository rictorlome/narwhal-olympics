export class Background {
  constructor() {
    this.img = new Image(2500,10000)
    this.img.src = 'assets/whale-olympics-background.png';
  }
  
  draw(ctx, whale) {
    const img = this.img;
    let sx = whale.pos[0]
    let sy = whale.pos[1]

    ctx.drawImage(img, (sx-1925)%img.width, sy, ctx.canvas.width, ctx.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.drawImage(img, (sx)%img.width, sy, ctx.canvas.width, ctx.canvas.height, 0, 0, ctx.canvas.width, ctx.canvas.height)
  }
}
