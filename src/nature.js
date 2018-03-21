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
