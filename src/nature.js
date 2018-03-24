export class Background {
  draw(ctx, whale) {
    let img = new Image(2500,10000)
    img.src = 'assets/whale-olympics-background.png';
    let sx = whale.pos[0]
    let sy = whale.pos[1]
    ctx.drawImage(img, (sx-1925)%2500, sy, 575, 750, 0, 0, 575, 750)
    ctx.drawImage(img, (sx)%2500, sy, 575, 750, 0, 0, 575, 750)
  }
}
