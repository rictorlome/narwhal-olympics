import { Whale } from './whale';

export class Game {
  constructor(DIM_X, DIM_Y, ctx) {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.ctx = ctx;
    this.whale = new Whale({
      pos: this.randomPosition(),
      game: this
    })
  }
  randomPosition() {
    const x = Math.floor(Math.random() * this.DIM_X);
    const y = Math.floor(Math.random() * this.DIM_Y);
    return [x,y];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.whale.draw(ctx)
  }
}
