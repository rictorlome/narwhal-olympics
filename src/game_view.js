import { Game } from './game'
import { Whale } from './whale'

export class GameView {
  constructor(game, bCtx, wCtx) {
    this.game = game;
    this.bCtx = bCtx;
    this.wCtx = wCtx;
    this.whale = this.game.whale
    window.whale = this.whale
  }

  start() {
    const boundGameDraw = Game.prototype.draw.bind(this.game);
    const boundGameMoveObjects = Game.prototype.moveObjects.bind(this.game)

    this.bindKeyHandlers();

    window.setInterval(boundGameDraw, 26, this.bCtx, this.wCtx);
    window.setInterval(boundGameMoveObjects, 26);
  }

  bindKeyHandlers() {
    key('up', () => this.whale.accelerate());
    key('down', () => this.whale.decelerate());
    key('left', () => this.whale.turnLeft());
    key('right', () => this.whale.turnRight());
    key('space', () => this.whale.freeze());
    key('n', ()=> this.whale.nudge())
  }
}
