import { Game } from './game'
import { Whale } from './whale'

export class GameView {
  constructor(game, bCtx, wCtx) {
    this.game = game;
    this.bCtx = bCtx;
    this.wCtx = wCtx;
    this.whale = this.game.whale
    this.bindKeyHandlers = this.bindKeyHandlers.bind(this);
  }

  start() {
    const boundGameDraw = Game.prototype.draw.bind(this.game);
    const boundGameMoveObjects = Game.prototype.moveObjects.bind(this.game)

    this.bindKeyHandlers();

    window.setInterval(boundGameDraw, 26, this.bCtx, this.wCtx);
    window.setInterval(boundGameMoveObjects, 26);
  }

  bindKeyHandlers() {
    const whale = this.whale;
    document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.key || e.keyCode) {
      case 'ArrowLeft':
      whale.turnLeft();
      break;

      case 'ArrowUp':
      whale.accelerate();
      break;
      
      case 'ArrowRight':
      whale.turnRight();
      break;

      case 'ArrowDown':
      whale.decelerate();
      break;

      default: return;
    }
    e.preventDefault();
    };

  }
}
