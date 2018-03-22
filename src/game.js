import { Whale } from './whale';
import { Ocean, Ground, Background } from './nature';

import { Camera } from '../lib/camera'

export class Game {
  constructor(DIM_X, DIM_Y) {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.whale = new Whale({
      pos: this.randomPosition(),
      game: this
    })
    this.background = new Background()
    this.ground = new Ground();
    this.ocean = new Ocean();
  }

  randomPosition() {
    const x = Math.floor(Math.random() * this.DIM_X);
    const y = Math.floor((Math.random() * 1000) + 4000);
    return [x,y];
  }

  draw(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.background.draw(ctx,this.whale)
    this.whale.draw(ctx)
  }

  moveObjects() {
    this.whale.move()
  }
}
