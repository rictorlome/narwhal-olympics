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
    let img = new Image(10200,6756)
    img.src = '/Users/c/workspace/whale-olympics/assets/ocean_blues.jpg';
    let sx = whale.pos[0] % 4000;
    let sy = whale.pos[1]
    ctx.drawImage(img, sx, sy, 2000, 1500, 0, 0, 2000, 1500)
  }
}
