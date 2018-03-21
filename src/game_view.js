import { Game } from './game'

export class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }
  start() {
    const boundGameDraw = Game.prototype.draw.bind(this.game);
    window.setInterval(boundGameDraw, 20, this.ctx);
  }
}
