import { Whale } from './whale';
import { Ocean, Ground, Background } from './nature';

import { Camera } from '../lib/camera'

export class Game {
  constructor(DIM_X, DIM_Y) {
    this.DIM_X = DIM_X;
    this.DIM_Y = DIM_Y;
    this.whale = new Whale({
      pos: [900,7400],
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

  draw(bCtx, wCtx) {
    bCtx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    wCtx.clearRect(0, 0, 100, 100)
    this.background.draw(bCtx,this.whale)
    this.whale.draw(wCtx)
  }

  moveObjects() {
    this.whale.move()
  }
}
