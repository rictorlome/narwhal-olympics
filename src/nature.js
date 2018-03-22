export class Ocean {
  draw(ctx) {
    ctx.fillStyle = 'blue';
    ctx.rect(0,1100,2000,250)
    ctx.fill();
  }
}

export class Ground {
  draw(ctx) {
    ctx.fillStyle = 'brown';
    ctx.rect(0,1400,2000,100)
    ctx.fill();
  }
}

export class Background {
  draw(ctx, whale) {
    let img = new Image(2500,10000)
    img.src = 'assets/whale-olympics-background.png';
    let sx = whale.pos[0]
    let sy = whale.pos[1]
    ctx.drawImage(img, (sx-2212)%2500, sy, 575, 750, 0, 0, 575, 750)
    ctx.drawImage(img, sx%2500, sy, 575, 750, 0, 0, 575, 750)
    ctx.drawImage(img, (sx+2212)%2500, sy, 575, 750, 0, 0, 575, 750)
  }
}
