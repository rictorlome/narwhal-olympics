import { Game } from './game'
import { GameView } from './game_view'

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('game-menu-modal')
  const start_button = document.getElementById('start-game-button')


  const bCanvas = document.getElementById('game-canvas');
  const bCtx = bCanvas.getContext('2d');

  const wCanvas = document.getElementById('whale-canvas');
  const wCtx = wCanvas.getContext('2d');


  const new_game = new Game(575,750);
  const new_game_view = new GameView(new_game, bCtx, wCtx);

  start_button.addEventListener('click', (e) => {
    bCanvas.classList.toggle('hidden');
    wCanvas.classList.toggle('hidden');
    modal.classList.toggle('hidden');
    new_game.started = true;
    new_game.timer.start();
  })

  new_game_view.start();
});
