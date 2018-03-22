import { Game } from './game'
import { Whale } from './whale'

export class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.whale = this.game.whale
    window.whale = this.whale
  }

  start() {
    const boundGameDraw = Game.prototype.draw.bind(this.game);
    const boundGameMoveObjects = Game.prototype.moveObjects.bind(this.game)
    this.bindKeyHandlers();
    window.setInterval(boundGameDraw, 40, this.ctx);
    window.setInterval(boundGameMoveObjects, 40, this.ctx);
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
