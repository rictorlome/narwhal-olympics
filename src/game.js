import { Whale } from './whale';
import { Background } from './nature';
import { Timer } from './timer';
import { Score } from './score';

export class Game {
  constructor() {
    this.whale = new Whale({
      pos: [90000000000000,7400],
      game: this
    })
    this.background = new Background()
    this.timer = new Timer()
    this.score = new Score(this.whale)
    this.started = false;
    this.addListener()
  }

  randomPosition() {
    const x = Math.floor(Math.random() * this.DIM_X);
    const y = Math.floor((Math.random() * 1000) + 4000);
    return [x,y];
  }

  draw(bCtx, wCtx) {
    bCtx.clearRect(0, 0, bCtx.canvas.width, bCtx.canvas.height);
    wCtx.clearRect(0, 0, wCtx.canvas.width, wCtx.canvas.height);

    if (this.timer.timeleft === 0 && this.whale.underwater) {
      this.finish()
      return;
    }

    this.background.draw(bCtx,this.whale)
    this.whale.draw(wCtx)
  }

  moveObjects() {
    if (this.started) this.whale.move()
  }
  finish() {
    const bCanvas = document.getElementById('game-canvas');
    const wCanvas = document.getElementById('whale-canvas');
    const gameOverModal = document.getElementById('game-over-modal');

    bCanvas.classList.add('hidden');
    wCanvas.classList.add('hidden');
    gameOverModal.classList.remove('hidden');

  }
  restart() {
    const bCanvas = document.getElementById('game-canvas');
    const wCanvas = document.getElementById('whale-canvas');
    const gameOverModal = document.getElementById('game-over-modal');

    bCanvas.classList.remove('hidden');
    wCanvas.classList.remove('hidden');
    gameOverModal.classList.add('hidden');

    this.whale.pos = [90000000000000, 7400]
    this.whale.vel = [0, 0]
    this.whale.angle = 0;

    this.timer = new Timer()
    this.timer.start();
    clearInterval(this.score.show)
    this.score = new Score(this.whale)
  }
  addListener() {
    const play_again = document.getElementById('play-again-button')
    play_again.addEventListener('click', () => this.restart());
  }

}
